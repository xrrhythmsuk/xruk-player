<script lang="ts" setup>
import { computed, nextTick, ref, watch } from "vue"
import { injectStateRequired } from "../../services/state"
import { getCategoriesAndTunes } from "../../state/state"
import PatternListFilter, { Filter } from "../pattern-list-filter.vue"
import { getLocalizedDisplayName } from "../../services/i18n"

const props = defineProps<{
	tuneName: string | null | undefined
}>()

const emit = defineEmits<{
	"update:tuneName": [tuneName: string | null | undefined]
}>()

const tuneName = computed({
	get: () => props.tuneName,
	set: (tuneName) => {
		emit("update:tuneName", tuneName)
	}
})

const state = injectStateRequired()

const filter = ref<Filter | undefined>(undefined)

const filterCategorisedPatternList = computed(() =>
	getCategoriesAndTunes(state.value, filter.value)
)

const tuneListRef = ref<HTMLElement | null>(null)

watch(tuneName, () => {
	if (tuneName.value) {
		// Check if the tune exists in any of the categories
		const allTunes: string[] = []
		for (const category of filterCategorisedPatternList.value) {
			allTunes.push(...category.tunes)
		}
		if (!allTunes.includes(tuneName.value))
			filter.value = { text: "", cat: "all" }

			void nextTick(() => {
				scrollToTune();
			});
		}
	}, { immediate: true });

const scrollToTune = () => {
	tuneListRef.value?.querySelector('.nav-link.active')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
}
</script>

<template>
	<div class="bb-tune-list">
		<!--
		<PatternListFilter v-model="filter" :show-custom="false" class="px-3" />
-->
		<ul class="nav nav-pills flex-column flex-nowrap" ref="tuneListRef">
			<template v-for="category in filterCategorisedPatternList" :key="category.title">
				<li class="nav-item category-header">
					<h3>{{ getLocalizedDisplayName(category.title) }}</h3>
				</li>
				<li v-for="thisTuneName in category.tunes" :key="thisTuneName" class="nav-item"
					:class="{ active: thisTuneName == tuneName }">
					<a class="nav-link" :href="`#/listen/${thisTuneName}/`" draggable="false">
						{{ getLocalizedDisplayName(state.tunes[thisTuneName].displayName || thisTuneName) }}
					</a>
				</li>
			</template>
		</ul>
	</div>
</template>

<style lang="scss">
.bb-tune-list {
	--padding: 1.4rem;
	padding: var(--padding) 0;
	display: flex;
	flex-direction: column;
	flex: 0 1 20rem;
	background: var(--green);

	a {
		color: var(--text);
	}

	.category-header { 
		padding: 0 var(--bs-nav-link-padding-x);
	}

	>.nav {
		flex-basis: 0;
		flex-grow: 1;
		position: relative;

		.nav-item.active {
			background-color: var(--bs-body-bg);

			>a {
				color: var(--text);
			}
		}
	}
}
</style>