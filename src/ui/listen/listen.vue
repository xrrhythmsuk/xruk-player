<script lang="ts" setup>
	import { ref, TeleportProps, watch } from "vue";
	import { normalizeState, State } from "../../state/state";
	import { stopAllPlayers } from "../../services/player";
	import { provideState } from "../../services/state";
	import { useRefWithOverride } from "../../utils";
	import { getTuneOfTheYear } from "../../services/utils";
	import TuneList from "./tune-list.vue";
	import TuneView from "../tune-view.vue";
	import type { Ref } from "vue";

	const props = defineProps<{
		/** null means to forward to the tune of the year */
		tuneName?: string | null;
		editPattern?: string;
		sidebarToggleContainer?: TeleportProps['to'];
		state?: Ref<State>;
	}>();

	const emit = defineEmits<{
		"update:tuneName": [tuneName: string | null | undefined];
		"update:editPattern": [patternName: string | undefined];
	}>();

	const tuneName = useRefWithOverride(undefined, () => props.tuneName, (tuneName) => emit("update:tuneName", tuneName));

	const state = props.state ?? ref(normalizeState());
	provideState(state);

	watch(tuneName, () => {
		stopAllPlayers();

		if (!tuneName.value) {
			tuneName.value = getTuneOfTheYear();
		}
	}, { immediate: true });
</script>

<template>
	<TuneView
		class="bb-listen"
		:tuneName="tuneName || undefined"
		:patternName="props.editPattern"
		:readonly="true"
		:sidebarToggleContainer="sidebarToggleContainer"
		@update:tuneName="tuneName = $event"
	>
		<TuneList v-model:tuneName="tuneName" />
	</TuneView>
</template>

<style lang="scss">
	.bb-listen {
		.bb-tune-list {
			flex-grow: 1;
		}
	}
</style>
