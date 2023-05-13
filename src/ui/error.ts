import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./error.vue";

@WithRender
@Component({
	props: { message: String }
})

export default class Error extends Vue {
}
