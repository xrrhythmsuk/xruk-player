<script lang="ts">
	/**
	 * Renders a collapsible card, styled like the pattern list, that lists the songs in the current state.
	 * Clicking the header expands or collapses the list; clicking a song selects it. Both emit `navigate` so the
	 * parent can navigate to the root /compose route.
	 */
	export default {};
</script>

<script setup lang="ts">
	import { ref } from "vue";
	import { useI18n } from '../../services/i18n';
	import { injectStateRequired } from '../../services/state';
	import { getSongName } from '../../state/state';
	import Collapse from '../utils/collapse.vue';

	defineProps<{
		songIdx: number;
	}>();

	const emit = defineEmits<{
		"update:songIdx": [songIdx: number];
		"navigate": [];
	}>();

	const i18n = useI18n();

	const state = injectStateRequired();

	const isOpen = ref(true);

	const handleToggle = () => {
		isOpen.value = !isOpen.value;
		emit("navigate");
	};

	const handleSelectSong = (songIdx: number) => {
		emit("update:songIdx", songIdx);
		emit("navigate");
	};
</script>

<template>
	<div class="card bb-song-list">
		<div class="card-header">
			<div class="d-grid">
				<button type="button" class="btn btn-link" @click="handleToggle()">
					{{i18n.t("song-list.title")}}
					<fa icon="caret-down"/>
				</button>
			</div>
		</div>
		<Collapse :show="isOpen" :height="state.songs.length * 40 + 16">
			<div class="card-body">
				<div class="d-grid gap-2">
					<a v-for="(thisSong, idx) in state.songs" :key="idx" href="javascript:" class="song-name"
						:class="{ active: idx == songIdx }" @click="handleSelectSong(idx)" draggable="false">
						{{getSongName(state, idx)}}
					</a>
				</div>
			</div>
		</Collapse>
	</div>
</template>

<style lang="scss">
	.bb-song-list {
		margin-bottom: 8px;
		border: none;

		.card-header {
			background-color: var(--cyan);
			padding: 0;
			border: none;

			.btn {
				font-size: 1.425rem;
				text-align: left;
				text-decoration: none;
				color: inherit;
				position: relative;
				border: none;

				.fa-caret-down {
					position: absolute;
					right: 10px;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}

		.card-body {
			padding: 0 8px;

			a.song-name {
				font-size: 1.425rem;
				color: var(--bs-body-color);
				text-decoration: none;

				&.active {
					font-weight: bold;
				}
			}
		}
	}
</style>
