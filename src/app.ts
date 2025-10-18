import { createApp, defineComponent, h, ref } from "vue"
import "./bootstrap.scss"
import "./bootstrap"
import "./app.scss"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Overview from "./ui/overview.vue"
import { registerServiceWorker } from "./services/service-worker"
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faBars,
	faCaretDown,
	faCheck,
	faClock,
	faCode,
	faCog,
	faCopy,
	faComment,
	faDownload,
	faEraser,
	faExclamationCircle,
	faInfoCircle,
	faFileImport,
	faFileAudio,
	faHandPointRight,
	faHeadphones,
	faLink,
	faMobileAlt,
	faMusic,
	faPause,
	faPen,
	faPencilAlt,
	faPlay,
	faPlayCircle,
	faPlus,
	faQuestionCircle,
	faRepeat,
	faShareFromSquare,
	faSlidersH,
	faStar,
	faStop,
	faTrash,
	faVolumeMute,
	faWindowClose
} from '@fortawesome/free-solid-svg-icons'
import Vue3TouchEvents, { Vue3TouchEventsOptions } from "vue3-touch-events"
import { ensurePersistentStorage, reactiveLocalStorage } from "./services/localStorage"
import { reactiveLocationHash } from "./services/router"

registerServiceWorker()

library.add(faBars,
	faCaretDown,
	faCheck,
	faClock,
	faCode,
	faCog,
	faCopy,
	faComment,
	faDownload,
	faEraser,
	faExclamationCircle,
	faInfoCircle,
	faFileImport,
	faFileAudio,
	faHandPointRight,
	faHeadphones,
	faLink,
	faMobileAlt,
	faMusic,
	faPause,
	faPen,
	faPencilAlt,
	faPlay,
	faPlayCircle,
	faPlus,
	faQuestionCircle,
	faRepeat,
	faShareFromSquare,
	faSlidersH,
	faStar,
	faStop,
	faTrash,
	faVolumeMute,
	faWindowClose)

const Root = defineComponent({
	setup() {
		const persisted = ref(false)

		return () => h(Overview, {
			storage: reactiveLocalStorage,
			path: reactiveLocationHash.value,
			'onUpdate:path': (path) => {
				reactiveLocationHash.value = path
			},
			'onUpdate:route': (route) => {
				if (!persisted.value && route.tab === "compose") {
					persisted.value = true
					ensurePersistentStorage()
				}
			}
		})
	}
})

createApp(Root, { config: { performance: true } })
	.use<Vue3TouchEventsOptions>(Vue3TouchEvents, {})
	.component('fa', FontAwesomeIcon)
	.mount('#app')

document.getElementById('loading')!.remove();

