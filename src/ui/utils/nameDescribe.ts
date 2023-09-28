import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import WithRender from "./nameDescribe.vue";
import $ from 'jquery';
import { sleep } from "../../utils";

export type Validate = (value: string) => string | null | undefined;

export async function nameAndDescribe(instance: Vue, title: string, name?: string, description?: string, validate?: Validate): Promise<[string, string] | undefined> {
	let result
	const prompt = instance.$createElement(NameDescribe, {
		props: { name, description },
		on: {
			change(value : [string, string]) {
				result = value;
			}
		}
	});

	const answer = await instance.$bvModal.msgBoxConfirm([ prompt ], { title });

	if(answer) {
		await sleep();
		return result;
	}
}

@WithRender
@Component({})
export default class NameDescribe extends Vue {

	@Prop({ type: String, default: "" }) readonly name!: string;
	@Prop({ type: String, default: "" }) readonly description!: string;

	@Watch("name")
	@Watch("description")
	onValueChange() {
		this.$emit("change", [this.name, this.description]);
	}
}