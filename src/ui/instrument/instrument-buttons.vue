<template>
  <div class="bb-instr-buttons d-flex gap-2 align-items-center">
    <div class="btn-group">
      <button class="btn btn-outline-secondary" @click="selectAll"><fa icon="headphones" class="pr-2" /></button>

      <button 
        v-for="instrument in instruments" 
        :key="instrument.key"
        class="btn btn-outline-secondary" 
        :class="{ active: active(instrument.key) }" 
        @click="onClick(instrument.key)"
      >
        {{ instrument.label }}
      </button>
      
      <PlaybackSettingsPicker v-model="playbackSettings" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Instrument } from "../../config";
import type { PlaybackSettings, Whistle } from "../../state/playbackSettings";
import PlaybackSettingsPicker from "../playback-settings/playback-settings-picker.vue";

const props = defineProps<{
  playbackSettings: PlaybackSettings;
}>();

const emit = defineEmits<{
  "update:playbackSettings": [playbackSettings: PlaybackSettings];
}>();

const playbackSettings = computed({
  get: () => props.playbackSettings,
  set: (settings) => {
    emit("update:playbackSettings", settings);
  }
});

const instruments = [
  { key: 'ls' as Instrument, label: 'Low' },
  { key: 'ms' as Instrument, label: 'Mid' },
  { key: 'hs' as Instrument, label: 'High' },
  { key: 'sn' as Instrument, label: 'Snare' },
  { key: 're' as Instrument, label: 'Repi' },
  { key: 'ta' as Instrument, label: 'Tam' },
  { key: 'ag' as Instrument, label: 'Agogô' },
];

function active(instr: Instrument): boolean {
  const { mute } = playbackSettings.value;
  return !mute[instr];
}

function onClick(instr: Instrument) {
  const instrs: Instrument[] = ['ls', 'ms', 'hs', 'sn', 're', 'ta', 'ag'];
  const allInstrs = [...instrs, 'sh'] as Instrument[]; // Leave whistle and shouting ('ot') always active
  const nextMute = { ...playbackSettings.value.mute };

  if (instrs.every(i => !nextMute[i])) {
    for (let i of allInstrs) {
      nextMute[i] = true;
    }
    nextMute[instr] = false;
  }
  else if (instrs.every(i => nextMute[i] === (i !== instr))) {
    for (let i of allInstrs) {
      nextMute[i] = false;
    }
  }
  else {
    nextMute[instr] = !nextMute[instr];
  }

  const activeCount = instrs.filter(i => !nextMute[i]).length;
  const whistle: Whistle = activeCount === 1 ? 2 : false;
  playbackSettings.value = {
    ...playbackSettings.value,
    mute: nextMute,
    whistle,
    headphones: []
  };
}

function selectAll() {
  const instrs: Instrument[] = ['ls', 'ms', 'hs', 'sn', 're', 'ta', 'ag'];
  const nextMute = { ...playbackSettings.value.mute };

  for (let i of instrs) {
    nextMute[i] = false;
  }

  playbackSettings.value = {
    ...playbackSettings.value,
    mute: nextMute,
    whistle: false,
    headphones: []
  };
}
</script>

<style lang="scss" scoped>
.bb-instr-buttons {
  button:not(.active):hover { 
    background: transparent;
  }
  
  @media (max-width: 575.98px) {
    .btn-group { 
      max-width: 15em;
      flex-wrap: wrap;
      
      > * { 
        margin-left: -1px;
        margin-top: -1px; 
      }
    }
  }
}
</style>