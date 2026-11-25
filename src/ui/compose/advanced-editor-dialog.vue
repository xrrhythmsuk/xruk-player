<script setup lang="ts">
	import jsonFormat from "json-format";
	import { computed, ref } from "vue";
	import * as z from "zod";
	import { injectStateRequired } from "../../services/state";
	import { getSortedTuneList, replaceTune } from "../../state/state";
	import { normalizeTune, tuneIsInCategory } from "../../state/tune";
	import { compressPattern, Pattern, patternFromCompressed } from "../../state/pattern";
	import defaultTunes from "../../defaultTunes";
	import { getLocalizedDisplayName, useI18n } from "../../services/i18n";
	import { useModal } from "../utils/modal";

	const emit = defineEmits<{
		hidden: [];
	}>();

	const state = injectStateRequired();

	const i18n = useI18n();

	const compressedPatternSchema = z.object({
		length: z.number().optional(),
		time: z.number().optional(),
		upbeat: z.number().optional(),
		speed: z.number().optional(),
		loop: z.boolean().optional(),
		displayName: z.string().optional(),
		description: z.string().optional(),
		volumeHack: z.any().optional(),
		mnemonics: z.record(z.string(), z.string().optional()).optional()
	}).passthrough();

	const compressedTuneValidator = z.object({
		patterns: z.record(z.string(), compressedPatternSchema),
		description: z.string().optional()
	});

	const customTunes = computed(() => getSortedTuneList(state.value).filter((tuneName) => tuneIsInCategory(state.value.tunes[tuneName], "custom")));

	const selectedTune = ref<string>();

	const text = ref("");

	const modalRef = ref<HTMLElement>();
	const modal = useModal(modalRef, {
		onHidden: () => {
			emit("hidden");
		}
	});

	const parsed = computed<{ data?: { patterns: Record<string, Pattern>, description?: string }, errors?: Array<string> }>(() => {
		if(!text.value.trim())
			return { };

		try {
			const json = JSON.parse(text.value);
			const result = compressedTuneValidator.safeParse(json);
			if(!result.success)
				return { errors: result.error.issues.map((issue) => (issue.path.length > 0 ? issue.path.join(".") + ": " : "") + issue.message) };

			const patterns: Record<string, Pattern> = { };
			const errors: Array<string> = [ ];
			for(const [patternName, compressed] of Object.entries(result.data.patterns)) {
				try {
					patterns[patternName] = patternFromCompressed(compressed, defaultTunes.getPattern(selectedTune.value!, patternName) || undefined);
				} catch(e: any) {
					errors.push(patternName + ": " + (e.message || String(e)));
				}
			}

			if(errors.length > 0)
				return { errors };

			return { data: { patterns, description: result.data.description } };
		} catch(e: any) {
			return { errors: [e.message || String(e)] };
		}
	});

	const isValid = computed(() => !!parsed.value.data);

	const selectTune = (tuneName: string) => {
		selectedTune.value = tuneName;
		const tune = state.value.tunes[tuneName];
		if(!tune) {
			text.value = "";
			return;
		}

		const patterns = Object.fromEntries(Object.entries(JSON.parse(JSON.stringify(tune)).patterns).map(([patternName, pattern]) => {
			return [patternName, compressPattern(pattern as Pattern, defaultTunes.getPattern(tuneName, patternName) || undefined)];
		}));

		text.value = jsonFormat({ patterns, ...(tune.description ? { description: tune.description } : { }) });
	};

	const save = () => {
		const parsedValue = parsed.value;
		if(!selectedTune.value || !parsedValue.data)
			return;

		const current = state.value.tunes[selectedTune.value];
		replaceTune(state.value, selectedTune.value, normalizeTune({
			displayName: current?.displayName,
			sheet: current?.sheet,
			video: current?.video,
			speed: current?.speed,
			description: parsedValue.data.description,
			patterns: parsedValue.data.patterns
		}));
		modal.hide();
	};
</script>

<template>
	<Teleport to="body">
		<div class="modal fade bb-advanced-editor-dialog" tabindex="-1" aria-hidden="true" ref="modalRef">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5">{{i18n.t("advanced-editor-dialog.title")}}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" :aria-label="i18n.t('general.dialog-close')"></button>
					</div>
					<div class="modal-body">
						<label class="form-label">{{i18n.t("advanced-editor-dialog.pick-tune")}}</label>
						<select class="form-select" @change="selectTune(($event.target as HTMLSelectElement).value)">
							<option value="" disabled :selected="!selectedTune">{{i18n.t("advanced-editor-dialog.pick-tune-placeholder")}}</option>
							<option v-for="tuneName in customTunes" :key="tuneName" :value="tuneName" :selected="tuneName === selectedTune">{{getLocalizedDisplayName(state.tunes[tuneName].displayName || tuneName)}}</option>
						</select>

						<textarea
							class="form-control bb-advanced-editor-textarea"
							:class="text.length === 0 ? undefined : isValid ? 'is-valid' : 'is-invalid'"
							v-model="text"
							:placeholder="i18n.t('advanced-editor-dialog.pick-tune-hint')"
							spellcheck="false"
						/>

						<div v-if="parsed.errors" class="invalid-feedback d-block">
							<div v-for="(error, idx) in parsed.errors" :key="idx">{{error}}</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="modal.hide()">{{i18n.t("general.dialog-cancel")}}</button>
						<button type="button" class="btn btn-primary" @click="save()" :disabled="!selectedTune || !isValid">{{i18n.t("advanced-editor-dialog.save")}}</button>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style lang="scss">
	.bb-advanced-editor-dialog {
		.bb-advanced-editor-textarea {
			margin-top: 0.75rem;
			height: 60vh;
			font-family: var(--bs-font-monospace);
			font-size: 0.875rem;
			white-space: pre;
			overflow: auto;
		}
	}
</style>
