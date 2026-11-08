<script setup lang="ts">
	import Collapse from "bootstrap/js/dist/collapse";
	import { onBeforeUnmount, onMounted, ref, watch } from "vue";

	const props = withDefaults(defineProps<{
		height?: number;
		show?: boolean;
	}>(), {
		height: 0,
		show: false
	});

	const containerRef = ref<HTMLElement>();
	const collapseRef = ref<Collapse>();
	const shouldRender = ref(false);

	// Bootstrap does not cancel the pending transition callback on dispose(), so
	// disposing while a transition is in flight makes that callback dereference a
	// null element. Defer disposal until the transition has settled.
	let isTransitioning = false;
	let isUnmounted = false;

	const dispose = () => {
		collapseRef.value?.dispose();
		collapseRef.value = undefined;
	};

	const settle = () => {
		isTransitioning = false;
		if (isUnmounted)
			dispose();
	};

	onMounted(() => {
		collapseRef.value = new Collapse(containerRef.value!, { toggle: false });

		containerRef.value!.addEventListener("show.bs.collapse", () => {
			isTransitioning = true;
			shouldRender.value = true;
		});
		containerRef.value!.addEventListener("hide.bs.collapse", () => {
			isTransitioning = true;
		});
		containerRef.value!.addEventListener("shown.bs.collapse", settle);
		containerRef.value!.addEventListener("hidden.bs.collapse", () => {
			shouldRender.value = false;
			settle();
		});

		watch(() => props.show, () => {
			if (props.show) {
				collapseRef.value?.show();
			} else {
				collapseRef.value?.hide();
			}
		}, { immediate: true });
	});

	onBeforeUnmount(() => {
		isUnmounted = true;
		if (!isTransitioning)
			dispose();
	});
</script>

<template>
	<div ref="containerRef" class="collapse">
		<slot v-if="shouldRender" />
		<div v-else :style="`height: ${height}px`" />
	</div>
</template>