import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./rename-tune-dialog.vue";
import { createTune, createPattern, State } from "../../state/state";
import { InjectReactive, Prop } from "vue-property-decorator";

@WithRender
@Component({})
export default class RenameTuneDialog extends Vue {
	@InjectReactive() state!: State;

	@Prop({ type: String, required: false }) name?: string;
	@Prop({ type: String, required: false }) description?: string;

	newName: string = "";
	newDescription: string = "";

	initialize() {
		this.newName = this.name || "";
		this.newDescription = this.description || "";
	}

	get exists() {
		return false
	};

	get title() {
		return "Create tune"
	}

	submit() {
		debugger;
		if(this.newName) {
			createTune(this.state, this.newName, { description: this.newDescription });
			createPattern(this.state, this.newName, "Tune", { loop: true });
			this.$router.push({ name: 'edit pattern', params: { tuneName: this.newName, patternName: "Tune" }})
		}
	}
}