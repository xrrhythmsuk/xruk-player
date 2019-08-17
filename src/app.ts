import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "./app.scss";
import Main from './ui/main/main';
import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
import "@fortawesome/fontawesome-free/scss/solid.scss"
import { enableRouter } from "./states";
import Vue2TouchEvents from "vue2-touch-events";
import {polyfill} from "mobile-drag-drop";
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";

polyfill({
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

Vue.use(BootstrapVue);
Vue.use(Vue2TouchEvents);

new Vue({
	el: "#loading",
	render: (createElement) => createElement(Main),
	mounted() {
		enableRouter(this);
	}
});
