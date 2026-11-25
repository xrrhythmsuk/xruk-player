<script setup lang="ts">
	import { computed } from 'vue';
	import { BeatboxReference, getPlayerById, stopAllPlayers } from '../services/player';
	import { useI18n } from '../services/i18n';
	import { track } from '../services/analytics';

	const props = defineProps<{
		player: BeatboxReference;
	}>();

	const i18n = useI18n();

	const player = computed(() => getPlayerById(props.player.key));

	const playPause = () => {
		if(!player.value.playing) {
			stopAllPlayers();
			player.value.play();
			track('player_playback_started');
		}
		else {
			void player.value.stop();
			track('player_playback_stopped');
		}
	};

	const stop = () => {
		if(player.value.playing) {
			void player.value.stop();
			track('player_playback_stopped');
		}
		player.value.setPosition(0);
	};
</script>

<template>
	<button type="button" class="btn" :class="`btn-${props.player.playing ? 'info' : 'success'}`" @click="playPause()" data-ph-capture-attribute-action="play-pause"><fa :icon="props.player.playing ? 'pause' : 'play'"></fa><span class="d-none d-sm-inline">{{' '}}{{props.player.playing ? i18n.t("play-pause-stop-button.pause") : i18n.t("play-pause-stop-button.play")}}</span></button>
	<button type="button" class="btn btn-danger" @click="stop()" data-ph-capture-attribute-action="stop"><fa icon="stop"/><span class="d-none d-sm-inline">{{" "}}{{i18n.t("play-pause-stop-button.stop")}}</span></button>
</template>