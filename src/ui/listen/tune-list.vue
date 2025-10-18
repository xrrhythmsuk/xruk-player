<script lang="ts" setup>
	import { computed, nextTick, ref, watch } from "vue";
	import { injectStateRequired } from "../../services/state";
	import PatternListFilter, { Filter, filterPatternList } from "../pattern-list-filter.vue";
	import { getLocalizedDisplayName } from "../../services/i18n";

	const props = defineProps<{
		tuneName: string | null | undefined;
	}>();

	const emit = defineEmits<{
		"update:tuneName": [tuneName: string | null | undefined];
	}>();

	const tuneName = computed({
		get: () => props.tuneName,
		set: (tuneName) => {
			emit("update:tuneName", tuneName);
		}
	});

	const state = injectStateRequired();

	const filter = ref<Filter | undefined>(undefined);

	const tuneList = computed(() => filterPatternList(state.value, filter.value));

	const tuneListRef = ref<HTMLElement | null>(null);

	watch(tuneName, () => {
		if (tuneName.value) {
			if(!filterPatternList(state.value, filter.value).includes(tuneName.value))
				filter.value = { text: "", cat: "all" };

			nextTick(() => {
				scrollToTune();
			});
		}
	}, { immediate: true });

	const scrollToTune = () => {
		tuneListRef.value?.querySelector('.nav-link.active')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
	};
</script>

<template>
	<div class="bb-tune-list">
		<PatternListFilter v-model="filter" :show-custom="false" />

		<hr />

		<ul class="nav nav-pills flex-column flex-nowrap" ref="tuneListRef">
			<li v-for="thisTuneName in tuneList" :key="thisTuneName" class="nav-item">
				<a class="nav-link" :class="{ active: thisTuneName == tuneName }" href="javascript:" @click="tuneName = thisTuneName" draggable="false">
					{{getLocalizedDisplayName(state.tunes[thisTuneName].displayName || thisTuneName)}}
				</a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">

	.bb-tune-list {
		--padding: 1.4rem;
		display: flex;
		flex-direction: column;
		padding: var(--padding);
		flex: 0 1 20rem;
		background: var(--green);
		a { 
			color: black; 
		}
		hr {
			/* https://stackoverflow.com/a/34372979/242365 */
			margin-left: 0;
			margin-right: 0;
		}

		> .nav {
			gap: var(--padding);
			flex-basis: 0;
			flex-grow: 1;
			min-height: 0;
			overflow-y: auto;
			position: relative;

				margin-left: -var(--padding);
				margin-right: -var(--padding);
				.nav-link, h4 { 
					padding: 0.3rem var(--padding);
					&.active { 
						background-color: white;
						color: black;
					}
			}
		}
	}
</style>