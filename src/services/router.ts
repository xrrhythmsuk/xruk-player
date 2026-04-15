import { computed, ref, Ref, watch } from "vue"
import { match, compile } from "path-to-regexp"

export type Route =
	{
		tab: "about"
	} |
	{
	tab: "listen"
	tuneName?: string
	patternName?: string
} | {
	tab: "compose"
	tuneName?: string
	patternName?: string
	importData?: string
}

const ROUTES = {
	"root": "/",
	"listen-tune": "/listen/:tuneName/",
	"listen-pattern": "/listen/:tuneName/:patternName",
	"compose": "/compose/",
	"compose-tune": "/compose/:tuneName/",
	"compose-pattern": "/compose/:tuneName/:patternName",
	"compose-importAndTune": "/compose/:importData/:tuneName/",
	"compose-importAndPattern": "/compose/:importData/:tuneName/:patternName",
	"compose-import": "/compose/:importData",
	"legacy-tune": "/:tuneName/",
	"legacy-pattern": "/:tuneName/:patternName",
	"legacy-importAndTune": "/:importData/:tuneName/",
	"legacy-importAndPattern": "/:importData/:tuneName/:patternName",
	"legacy-import": "/:importData"
} satisfies Record<string, string>

const ROUTES_MATCH = Object.fromEntries(Object.entries(ROUTES).map(([name, pattern]) => [name, match(pattern, { decode: decodeURIComponent, trailing: false })]))

const ROUTES_COMPILE = Object.fromEntries(Object.entries(ROUTES).map(([name, pattern]) => [name, compile(pattern, { encode: encodeURIComponent })]))

function pathToRoute(path: string): Route {
	let match: { name: keyof typeof ROUTES; params?: Partial<Record<string, string>> } | undefined
	if (path) {
		for (const name of Object.keys(ROUTES_MATCH) as Array<keyof typeof ROUTES>) {
			const m = ROUTES_MATCH[name](path)
			if (m) {
				match = { name, params: m.params as Record<string, string> }
				break
			}
		}
	}
	if (!match) {
		match = { name: 'root' }
	}

	switch (match.name) {
		case "listen-tune":
		case "listen-pattern":
			return {
				tab: "listen",
				tuneName: match.params?.tuneName,
				patternName: match.params?.patternName
			}

		case "compose":
		case "compose-tune":
		case "compose-pattern":
		case "compose-importAndTune":
		case "compose-importAndPattern":
		case "compose-import":
		case "legacy-tune":
		case "legacy-pattern":
		case "legacy-importAndTune":
		case "legacy-importAndPattern":
		case "legacy-import":
			return {
				tab: "compose",
				tuneName: match.params?.tuneName,
				patternName: match.params?.patternName,
				importData: match.params?.importData
			}

		case "root":
			return { tab: "about" }
	};
}

function routeToPath(route: Route): string {
	let match: { name: keyof typeof ROUTES; params?: Partial<Record<string, string>> } | undefined
	switch (route?.tab) {
		case "listen":
			if (!route.tuneName) {
				match = { name: "root" }
			} else if (!route.patternName) {
				match = { name: "listen-tune", params: { tuneName: route.tuneName } }
			} else {
				match = { name: "listen-pattern", params: { tuneName: route.tuneName, patternName: route.patternName } }
			}
			break

		case "compose":
			if (!route.tuneName) {
				match = { name: route.importData ? "compose-import" : "compose", params: { importData: route.importData } }
			} else if (!route.patternName) {
				match = { name: route.importData ? "compose-importAndTune" : "compose-tune", params: { importData: route.importData, tuneName: route.tuneName } }
			} else {
				match = { name: route.importData ? "compose-importAndPattern" : "compose-pattern", params: { importData: route.importData, tuneName: route.tuneName, patternName: route.patternName } }
			}
	}

	if (!match) {
		match = { name: "root" }
	}

	return ROUTES_COMPILE[match.name](match.params)
}

/**
 * Enables a two-directional binding between the specified path reference and the app state. The path represents the current app
 * state, and when the path is set, the app state is adjusted to represent the path. The path ref can be linked to the location
 * hash using {@link reactiveLocationHash}.
 */
export function useRouter(path: Ref<string>): Ref<Route> {
	const route = ref<Route>(pathToRoute(path.value))

	watch(path, () => {
		route.value = pathToRoute(path.value)
		window.scrollTo(0, 0);
	})

	watch(route, () => {
		path.value = routeToPath(route.value)
	}, { immediate: true, deep: true })

	return route
}

const locationHashTrigger = ref(0)
export const reactiveLocationHash = computed({
	get: () => {
		locationHashTrigger.value
		return location.hash.replace(/^#/, '')
	},
	set: (hash) => {
		location.hash = `#${hash}`
	}
})
window.addEventListener('hashchange', () => {
	locationHashTrigger.value++
});
