<script lang="ts" setup>
	import { ref, TeleportProps, watch } from "vue";
	import { normalizeState } from "../../state/state";
	import { stopAllPlayers } from "../../services/player";
	import { provideState } from "../../services/state";
	import TuneInfo from "./tune-info.vue";
	import { useRefWithOverride } from "../../utils";
	import { getTuneOfTheYear } from "../../services/utils";
	import TuneList from "./tune-list.vue";
	import HybridSidebar from "../utils/hybrid-sidebar.vue";
	import PatternPlayer from "../pattern-player/pattern-player.vue";
	import { useI18n } from "../../services/i18n"

	const i18n = useI18n();

	const props = defineProps<{
		/** null means to forward to the tune of the year */
		tuneName?: string | null;
		editPattern?: string;
		sidebarToggleContainer?: TeleportProps['to'];
	}>();

	const emit = defineEmits<{
		"update:tuneName": [tuneName: string | null | undefined];
		"update:editPattern": [patternName: string | undefined];
	}>();

	const tuneName = useRefWithOverride(undefined, () => props.tuneName, (tuneName) => emit("update:tuneName", tuneName));

	const state = ref(normalizeState());
	provideState(state);

	const isSidebarExpanded = ref(false);

	watch(tuneName, () => {
		isSidebarExpanded.value = false;
		stopAllPlayers();

		if (!tuneName.value) {
			tuneName.value = getTuneOfTheYear();
		}
	}, { immediate: true });
</script>

<template>
	<div class="bb-listen">
		<HybridSidebar v-model:isExpanded="isSidebarExpanded" :toggleContainer="sidebarToggleContainer">
			<TuneList v-model:tuneName="tuneName" />
			<template v-slot:toggle>
				<button type="button" class="btn btn-secondary" @click="isSidebarExpanded = !isSidebarExpanded">
					<fa icon="bars" />
				</button>
			</template>
		</HybridSidebar>

		<div class="bb-listen-info" v-if="props.editPattern">
			<PatternPlayer class="pattern-player" :tuneName="tuneName||''" :patternName="props.editPattern" :readonly="true">
			</PatternPlayer>
		</div>

		<div class="bb-listen-info" v-else>
			<TuneInfo v-if="tuneName" :tuneName="tuneName" :editPattern="props.editPattern"/>
		</div>
	</div>
</template>

<style lang="scss">
	.bb-listen {
		display: flex;
		flex-grow: 1;
		min-height: 0;

		.bb-tune-list {
			flex-grow: 1;
		}

		.bb-listen-info {
			flex: 1 0 0;
			overflow-x: auto;

			.bb-tune-info {
				padding: 1.2em;
				max-width: 740px;
				margin: 0 auto;
			}

			.pattern-player {
				display: block;
				margin: 1em;
			}
		}

	}
</style>