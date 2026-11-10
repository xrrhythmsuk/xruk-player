<script setup lang="ts">
	import { allInstruments, appendSongPart } from "../../state/song";
	import PatternList from "./pattern-list.vue";
	import { PatternPlaceholderItem } from "../pattern-placeholder.vue";
	import { scrollToElement } from "../../services/utils";
	import { provideState } from "../../services/state";
	import { computed, nextTick, ref, TeleportProps, watch } from "vue";
	import { History } from "../../services/history";
	import vTooltip from "../utils/tooltip";
	import { getPatternFromState, selectSong } from "../../state/state";
	import HistoryPicker from "./history-picker.vue";
	import SongPlayer from "./song-player.vue";
	import { clone, useRefWithOverride } from "../../utils";
	import TuneView from "../tune-view.vue";
	import { useI18n } from "../../services/i18n";

	const props = defineProps<{
		history: History;
		expandTune?: string;
		editPattern?: string;
		sidebarToggleContainer?: TeleportProps['to'];
	}>();

	const emit = defineEmits<{
		"update:expandTune": [tuneName: string | undefined];
		"update:editPattern": [patternName: string | undefined];
	}>();

	const i18n = useI18n();

	const expandTune = useRefWithOverride(undefined, () => props.expandTune, (tuneName) => emit("update:expandTune", tuneName));
	const editPattern = useRefWithOverride(undefined, () => props.editPattern, (patternName) => emit("update:editPattern", patternName));
	provideState(props.history.state);

	const state = computed(() => props.history.state.value);
	const editingPattern = computed(() => expandTune.value && editPattern.value && getPatternFromState(state.value, expandTune.value, editPattern.value));

	const tuneViewRef = ref<InstanceType<typeof TuneView>>();
	const songIdx = computed({
		get: () => state.value.songIdx,
		set: (value) => {
			state.value.songIdx = value;
		}
	});
	const playbackSettings = ref(clone(state.value.playbackSettings));
	const isDraggingPattern = ref(false);

	watch(isDraggingPattern, () => {
		if (isDraggingPattern.value) {
			tuneViewRef.value?.collapse();
		}
	});

	const song = computed(() => state.value.songs[songIdx.value]);
	watch(song, () => {
		if (!song.value) {
			songIdx.value = Math.max(state.value.songs.length - 1, 0);
			selectSong(state.value, songIdx.value);
		}
	}, { immediate: true });

	watch(songIdx, () => {
		selectSong(state.value, songIdx.value);
	});

	watch(playbackSettings, () => {
		state.value.playbackSettings = clone(playbackSettings.value);
	}, { deep: true });

	const patternClick = async (tuneName: string, patternName: string) => {
		const song = state.value.songs[songIdx.value];
		if(!song)
			return;

		appendSongPart(song, allInstruments([ tuneName, patternName ]), state.value);

		await nextTick();
		const el = tuneViewRef.value?.$el as HTMLElement | undefined;
		const songContainer = el?.querySelector<HTMLElement>(".bb-song-player .song-container");
		if (songContainer)
			scrollToElement(songContainer, false, true);
	};
</script>

<template>
	<TuneView
		ref="tuneViewRef"
		class="bb-compose"
		:tuneName="expandTune"
		:patternName="editingPattern ? editPattern : undefined"
		:readonly="false"
		closeHref="#/compose/"
		:sidebarToggleContainer="sidebarToggleContainer"
		@update:tuneName="expandTune = $event"
		@close="expandTune = undefined; editPattern = undefined"
	>
		<PatternList
			v-slot="slotProps"
			v-model:expandTune="expandTune"
			v-model:editPattern="editPattern"
			v-model:isDraggingPattern="isDraggingPattern"
		>
			<PatternPlaceholderItem><a href="javascript:" v-tooltip="i18n.t('compose.add-to-song-tooltip')" @click="patternClick(slotProps.tuneName, slotProps.patternName)" draggable="false"><fa icon="plus"/></a></PatternPlaceholderItem>
		</PatternList>

		<template v-slot:empty>
			<SongPlayer v-model:songIdx="songIdx" v-model:isDraggingPattern="isDraggingPattern">
				<template v-slot:toolbar-right>
					<HistoryPicker :history="history" />
				</template>
			</SongPlayer>
		</template>
	</TuneView>
</template>
