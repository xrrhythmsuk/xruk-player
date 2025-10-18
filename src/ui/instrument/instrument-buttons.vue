<template>
  <div class="bb-instr-buttons d-flex align-items-center">
    <fa icon="headphones" class="pr-2" />
    <div class="btn-group">
      <button 
        v-for="instrument in instruments" 
        :key="instrument.key"
        class="btn btn-outline-secondary" 
        :class="{ active: active(instrument.key) }" 
        @click="onClick(instrument.key)"
      >
        {{ instrument.label }}
      </button>
      <!-- PlaybackSettings component would go here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Instrument } from "../../config";
import type { PlaybackSettings, Whistle } from "../../state/playbackSettings";
import { Tune } from "../../state/tune";

const props = defineProps<{
  playbackSettings: PlaybackSettings;
  tune: Tune;
}>();

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
  const { mute } = props.playbackSettings;
  return !mute[instr];
}

function onClick(instr: Instrument) {
  const instrs: Instrument[] = ['ls', 'ms', 'hs', 'sn', 're', 'ta', 'ag'];
  const allInstrs = [...instrs, 'sh'] as Instrument[]; // Leave whistle and shouting ('ot') always active
  const { mute } = props.playbackSettings;

  if (instrs.every(i => !mute[i])) {
    for (let i of allInstrs) {
      mute[i] = true;
    }
    mute[instr] = false;
  }
  else if (instrs.every(i => mute[i] === (i !== instr))) {
    for (let i of allInstrs) {
      mute[i] = false;
    }
  }
  else {
    mute[instr] = !mute[instr];
  }

  const activeCount = instrs.filter(i => !mute[i]).length;
  const whistle: Whistle = activeCount === 1 ? 2 : false;
  props.playbackSettings.whistle = whistle;
  props.playbackSettings.headphones = [];
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