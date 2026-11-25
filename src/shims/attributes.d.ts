import "vue";

declare module "vue" {
	export interface HTMLAttributes {
		"data-bs-toggle"?: "dropdown" | "modal";
		"data-bs-target"?: string;
		"data-bs-dismiss"?: "modal";
		"data-ph-capture-attribute-action"?: string;
		"data-ph-capture-attribute-section"?: string;
		"data-ph-capture-attribute-dialog"?: string;
		"data-ph-capture-attribute-tune"?: string;
		"data-ph-capture-attribute-pattern"?: string;
	}
}