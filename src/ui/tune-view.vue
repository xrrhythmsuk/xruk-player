<script setup lang="ts">
	import { ref, TeleportProps, watch } from "vue";
	import HybridSidebar from "./utils/hybrid-sidebar.vue";
	import PatternPlayer from "./pattern-player/pattern-player.vue";
	import TuneInfo from "./listen/tune-info.vue";

	const props = withDefaults(defineProps<{
		tuneName?: string;
		patternName?: string;
		readonly?: boolean;
		closeHref?: string;
		sidebarToggleContainer?: TeleportProps['to'];
	}>(), {
		readonly: true
	});

	const emit = defineEmits<{
		"update:tuneName": [tuneName: string];
		close: [];
	}>();

	const isSidebarExpanded = ref(false);

	watch(() => props.tuneName, () => {
		isSidebarExpanded.value = false;
	});

	defineExpose({
		collapse: () => {
			isSidebarExpanded.value = false;
		}
	});
</script>

<template>
	<div class="bb-tune-view">
		<HybridSidebar v-model:isExpanded="isSidebarExpanded" :toggleContainer="sidebarToggleContainer">
			<slot />

			<template v-slot:toggle>
				<button type="button" class="btn btn-secondary" @click="isSidebarExpanded = !isSidebarExpanded">
					<fa icon="bars" />
				</button>
			</template>
		</HybridSidebar>

		<div class="bb-tune-view-info">
			<PatternPlayer
				v-if="patternName"
				class="pattern-player"
				:tuneName="tuneName || ''"
				:patternName="patternName"
				:readonly="readonly"
				:closeHref="closeHref"
				@close="emit('close')"
			/>

			<TuneInfo
				v-else-if="tuneName"
				:tuneName="tuneName"
				:readonly="readonly"
				@update:tuneName="emit('update:tuneName', $event)"
			/>

			<slot name="empty" v-else />
		</div>
	</div>
</template>

<style lang="scss">
	.bb-tune-view {
		display: flex;
		flex-grow: 1;
		min-height: 0;

		.bb-tune-view-info {
			flex: 1 0 0;
			min-width: 0;
			min-height: 0;
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
