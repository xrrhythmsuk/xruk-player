import "./tune-info.scss";
import defaultTunes from "../../defaultTunes";
import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./tune-info.vue";
import $ from "jquery";
import config from "../../config";
import { InjectReactive, Prop, Watch } from "vue-property-decorator";
import { State } from "../../state/state";
import PlaybackSettingsComponent from "../playback-settings/playback-settings";
import PatternPlaceholder, { PatternPlaceholderItem } from "../pattern-placeholder/pattern-placeholder";
import ExampleSongPlayer from "../example-song-player/example-song-player";
import InstrumentButtons from "../instrument/instrument-buttons";

function getTuneDescription(state: State, tuneName: string): string | null {
	// Use HTML from default tunes to avoid script injection through bbHistory
	const defaultTune = defaultTunes[tuneName],
		customTune = state.tunes[tuneName]

		if(defaultTune){
			let el = $("<div/>").html(defaultTune.description || "")
			el.find("a").attr("target", "_blank");
			return el.html()
		}

		return customTune.description || null
}

@WithRender
@Component({
	components: { PlaybackSettings: PlaybackSettingsComponent, PatternPlaceholder, ExampleSongPlayer, PatternPlaceholderItem, InstrumentButtons }
})
export default class TuneInfo extends Vue {

	@InjectReactive() readonly state!: State;

	@Prop({ type: String, required: true }) readonly tuneName!: string;

	get playbackSettings() { return this.state.playbackSettings }

	get tuneDescription() {
		return getTuneDescription(this.state, this.tuneName);
	}

	get tune() {
		return this.tuneName && this.state.tunes[this.tuneName];
	}

	get isCustom() { return !defaultTunes[this.tuneName] }

	@Watch("tuneName", { immediate: true })
	onTuneNameChange(tuneName: string, previousTuneName: string) {
		if(this.tune) {
				this.playbackSettings.speed = this.tune.speed || config.defaultSpeed;
		}
	}

}