import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./rename-tune-dialog.vue";
import { createTune, State, editTune, createPattern } from "../../state/state";
import { InjectReactive, Prop, Watch } from "vue-property-decorator";

@WithRender
@Component({})
export default class RenameTuneDialog extends Vue {
	@InjectReactive() state!: State;

	@Prop(String) id?: string;
	@Prop({ type: String, required: false }) tuneName?: string;

	newName: string = "";
	newDescription: string = "";
	changed = false

	initialize() {
		this.newName = this.tuneName || "";
		this.newDescription = this.editingTune?.description || "";
	}

	get editingTune(){ 
		return this.tuneName && this.state.tunes[this.tuneName] || undefined
	}

	get invalidFeedback() {
		const newName = this.newName?.trim();
		if(this.changed && !newName) return "Enter a name"
		if(this.state.tunes[this.newName] != this.editingTune) return "That name is already taken"
		return null
	};

	get title() {
		return this.editingTune ? "Editing tune" : "Create tune"
	}

	@Watch('newName')
	@Watch('newDescription')
	input() {
		this.changed = true
	}

	submit() {
		const newName = this.newName.trim();
		if(this.editingTune) {
			editTune(this.state,newName, { description : this.newDescription })
		}
		else
		{
			createTune(this.state, newName, { description : this.newDescription })
			createPattern(this.state, newName, "Tune", { loop: true });
			this.$router.push({ name: 'edit pattern', params: { tuneName: newName, patternName: "Tune" }})
		}
	}
}