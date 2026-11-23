import posthog from "posthog-js"
import type { LogAttributes } from "posthog-js"

const posthogToken = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN
const posthogHost = import.meta.env.VITE_POSTHOG_HOST

export const analyticsEnabled = Boolean(posthogToken && posthogHost)

if (analyticsEnabled) {
	posthog.init(posthogToken, {
		api_host: posthogHost,
		autocapture: true,
		// The app uses a custom hash-based router, so pageviews are captured explicitly
		// via {@link trackPageview} instead of relying on the History API.
		capture_pageview: false,
		capture_exceptions: {
			capture_unhandled_errors: true,
			capture_unhandled_rejections: true,
			capture_console_errors: false
		},
		logs: {
			serviceName: 'ror-player-web',
			environment: import.meta.env.MODE
		}
	})
} else if (import.meta.env.DEV) {
	if (!posthogToken) {
		throw new Error('VITE_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_POSTHOG_PROJECT_TOKEN is configured')
	}

	throw new Error('VITE_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_POSTHOG_HOST is configured')
}

/**
 * Captures a custom analytics event. No-op when analytics is not configured.
 */
export function track(event: string, properties?: Record<string, unknown>): void {
	if (!analyticsEnabled)
		return
	posthog.capture(event, properties)
}

/**
 * Captures a pageview for a route change. No-op when analytics is not configured.
 */
export function trackPageview(routeName: string, properties?: Record<string, unknown>): void {
	if (!analyticsEnabled)
		return
	posthog.capture("$pageview", { route: routeName, ...properties })
}

/**
 * Captures an error. No-op when analytics is not configured.
 */
export function trackException(error: unknown): void {
	if (!analyticsEnabled)
		return
	posthog.captureException(error)
}

/**
 * Logs a message to PostHog logs. No-op when analytics is not configured.
 */
export function trackLog(level: "info" | "error", message: string, properties?: LogAttributes): void {
	if (!analyticsEnabled)
		return
	if (level === "error")
		posthog.logger.error(message, properties)
	else
		posthog.logger.info(message, properties)
}
