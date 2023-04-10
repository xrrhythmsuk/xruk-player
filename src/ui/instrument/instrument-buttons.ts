import Vue from "vue";
import Component from "vue-class-component";
import { InjectReactive, Prop } from "vue-property-decorator";
import config, { Instrument } from "../../config";
import { PlaybackSettings, Whistle } from "../../state/playbackSettings";
import { State } from "../../state/state";
import WithRender from './instrument-buttons.vue'
import './instrument-buttons.scss'

@WithRender
@Component({})
export default class InstrumentButtons extends Vue {
  @InjectReactive() readonly state!: State;
  @Prop({ type: Object, required: true }) readonly playbackSettings!: PlaybackSettings;

  active(instr: Instrument): boolean {
    const { mute } = this.playbackSettings
    return !mute[instr]
  }

  onClick(instr: Instrument) {
    const instrs: Instrument[] = ['ls', 'ms', 'hs', 'sn', 're', 'ta', 'ag']
    const allInstrs = config.instrumentKeys
    const { mute } = this.playbackSettings
    if (instrs.every(i => !mute[i])) {
      for (let i of allInstrs) Vue.set(mute, i, true)
      Vue.set(mute, instr, false)
    }
    else if (instrs.every(i => mute[i] == (i != instr))) {
      for (let i of allInstrs) Vue.set(mute, i, false)
    }
    else {
      Vue.set(mute, instr, !mute[instr])
    }

    const whistleValue: Whistle = instrs.filter(i => !mute[i]).length == 1 ? (2) : false
    Vue.set(this.playbackSettings, 'whistle', whistleValue)
  }
}