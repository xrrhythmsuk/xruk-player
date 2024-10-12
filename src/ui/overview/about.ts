
import Vue from "vue";
import content from "../../../assets/about.md";
import Component from "vue-class-component";
import WithRender from "./about.vue";
import './about.scss'
import { ProvideReactive } from "vue-property-decorator";
import { getCategoriesAndTunes, normalizeState } from "../../state/state";

@WithRender
@Component({})
export default class extends Vue {
    content = content

	@ProvideReactive() state = normalizeState();

    get categoryList() {
      return getCategoriesAndTunes(this.state)
    }
  }