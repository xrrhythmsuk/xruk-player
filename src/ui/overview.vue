<script setup lang="ts">
import { stopAllPlayers } from "../services/player"
import { ref, watch } from "vue"
import Update from "./update.vue"
import Help from "./help/help.vue"
import Listen from "./listen/listen.vue"
import { History } from "../services/history"
import { Route, useRouter } from "../services/router"
import Compose from "./compose/compose.vue"
import { useRefWithOverride } from "../utils"
import { useI18n } from "../services/i18n"
import About from "./overview/about.vue"

const props = defineProps<{
	storage: Record<string, string>
	path?: string
}>()

const emit = defineEmits<{
	"update:path": [path: string]
	"update:route": [route: Route]
}>()

const i18n = useI18n()

const path = useRefWithOverride("", () => props.path, (path) => emit("update:path", path))

const route = useRouter(path)

watch(route, () => {
	emit("update:route", route.value)
}, { deep: true, immediate: true })

const history = new History(props.storage)

const sidebarToggleContainer = ref<HTMLElement>()

watch(() => route.value?.tab, () => {
	stopAllPlayers()
})
</script>

<template>
	<div class="bb-overview">
		<Update />

		<div class="header-nav">

			<span class="toggle bb-sidebar-toggle-container" ref="sidebarToggleContainer"></span>

			<a class="logo" href="https://xrrhythms.uk">
				<img src="/XRR-logo.webp" alt="XR Rhythms UK">
			</a>
			<a class="heading" href="https://xrrhythms.uk">
				<img src="/XRR-header.webp" class="d-none d-lg-inline">
			</a>

			<div class="nav nav-tabs d-flex flex-row tab-gap flex-wrap">
				<span class="nav-item"><a class="nav-link" :class="{ active: route.tab === 'about' }" href="javascript:"
						@click="route.tab = 'about'">{{ i18n.t('overview.about') }}</a></span>
				<span class="nav-item"><a class="nav-link" :class="{ active: route.tab === 'listen' }"
						href="javascript:" @click="route.tab = 'listen'">{{ i18n.t('overview.listen') }}</a></span>
				<span class="nav-item"><a class="nav-link" :class="{ active: route.tab === 'compose' }"
						href="javascript:" @click="route.tab = 'compose'">{{ i18n.t('overview.compose') }}</a></span>
				<span class="nav-item"><a class="nav-link"
						href="https://xrrhythms.uk/learn">Learn</a></span>
			</div>

			<span class="bb-overview-help">
				<Help />
			</span>
		</div>

		<div class="bb-overview-content">
			<template v-if="route.tab === 'about'">
				<About />
			</template>

			<template v-if="route.tab === 'listen'">
				<Listen :tuneName="route.tuneName ?? null" @update:tuneName="route.tuneName = $event ?? undefined"
					v-model:editPattern="route.patternName" :sidebarToggleContainer="sidebarToggleContainer" />
			</template>

			<template v-if="route.tab === 'compose'">
				<Compose :history="history" v-model:expandTune="route.tuneName" v-model:editPattern="route.patternName"
					v-model:importData="route.importData" :sidebarToggleContainer="sidebarToggleContainer" />
			</template>
		</div>
	</div>
</template>

<style lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

.bb-overview {
	--gap-size: 8px;
	@include media-breakpoint-down(md) {
		--gap-size: 0px;
	}
	display: flex;
	flex-direction: column;

	.bb-overview-toggle-patternList {
		position: absolute;
		top: 0.5em;
		left: 0.5em;
	}

	.bb-overview-help * {
		color: var(--bs-body-color);
	}

	.header-nav {
		display: flex;
		align-items: center;
		background-color: var(--secondary);
		padding: 1.5em 1em;
		gap: var(--gap-size);

		@include media-breakpoint-down(md) {
			display: grid;
			padding-bottom: 0;
			grid-template-columns: 3rem 1fr 3rem;
			.toggle {
				grid-column: 1 / 1;
				justify-self: start;
			}
			.logo {
				grid-column: 2 / 2;
				justify-self: center;

			}
			.nav {
				grid-row: 2 / 2;
				grid-column: 1 / 4;
				justify-self: center;
				margin: 1rem -1rem 0 -1rem;
				.nav-item a { 
					padding-bottom: 1em;
				}
			}
			.bb-overview-help {
				grid-column: 3 / 3;
				grid-row: 1 / 1;
				justify-self: end;
			}

			.logo img {
				max-height: 80px;
			}

		}
		.heading {
			flex-grow: 1;

			img {
				max-height: 30px;
			}
		}

		a {
			color: var(--bs-body-color);
		}

		font-weight:bold;

		.nav-tabs {
			border:none;
		}
	}

	.tab-gap {
		gap: var(--gap-size);
	}

	>.bb-overview-content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	.bb-sidebar-toggle-container> :last-child {
		margin-right: 0.5em;
	}
}
</style>