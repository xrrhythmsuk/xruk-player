<script setup lang="ts">
	import { computed, ref } from "vue";
	import { createTune, renameTune } from "../../state/state";
	import { injectStateRequired } from "../../services/state";
	import { generateId } from "../../utils";
	import { useI18n } from "../../services/i18n";
	import { useModal } from "../utils/modal";
	import vValidity from "../utils/validity";

	const props = defineProps<{
		initialTuneName?: string;
	}>();

	const emit = defineEmits<{
		hidden: [];
		submitted: [tuneName: string];
	}>();

	const state = injectStateRequired();
	const i18n = useI18n();
	const id = `bb-rename-tune-dialog-${generateId()}`;
	const modalRef = ref<HTMLElement>();
	const formRef = ref<HTMLFormElement>();
	const formTouched = ref(false);
	const nameTouched = ref(false);
	const name = ref("");
	const description = ref("");

	const isNew = computed(() => props.initialTuneName == null);
	const title = computed(() => isNew.value ? i18n.t("pattern-list.create-tune-title") : i18n.t("pattern-list.rename-tune-title"));
	const nameError = computed(() => {
		if (!name.value.trim())
			return i18n.t(isNew.value ? "pattern-list.create-tune-empty-name-error" : "pattern-list.rename-tune-empty-name-error");
		if (state.value.tunes[name.value.trim()] && name.value.trim() !== props.initialTuneName)
			return i18n.t(isNew.value ? "pattern-list.create-tune-duplicate-name-error" : "pattern-list.rename-tune-duplicate-name-error");
		return undefined;
	});

	const modal = useModal(modalRef, {
		onShown: () => {
			name.value = props.initialTuneName ?? "";
			description.value = props.initialTuneName ? state.value.tunes[props.initialTuneName]?.description ?? "" : "";
			formTouched.value = false;
			nameTouched.value = false;
		},
		onHidden: () => emit("hidden")
	});

	const submit = () => {
		formTouched.value = true;
		nameTouched.value = true;
		if (!formRef.value?.checkValidity() || nameError.value)
			return;

		const newName = name.value.trim();
		const data = { description: description.value || undefined };
		if (isNew.value) {
			createTune(state.value, newName, data);
		} else {
			renameTune(state.value, props.initialTuneName!, newName);
			state.value.tunes[newName].description = data.description;
		}
		emit("submitted", newName);
		modal.hide();
	};
</script>

<template>
	<Teleport to="body">
		<div class="modal fade bb-pattern-editor-dialog" tabindex="-1" aria-hidden="true" ref="modalRef">
			<div class="modal-dialog">
				<form class="modal-content" @submit.prevent="submit()" novalidate ref="formRef" :class="{ 'was-validated': formTouched }">
					<div class="modal-header">
						<h1 class="modal-title fs-5">{{title}}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" :aria-label="i18n.t('general.dialog-close')"></button>
					</div>
					<div class="modal-body">
						<div class="row mb-3" :class="{ 'was-validated': nameTouched }">
							<label :for="`${id}-name`" class="col-sm-4 col-form-label">Tune name</label>
							<div class="col-sm-8 position-relative">
								<input :id="`${id}-name`" class="form-control" type="text" v-model="name" autofocus v-validity="nameError" @input="nameTouched = true" @blur="nameTouched = true">
								<div v-if="nameError && nameTouched" class="invalid-tooltip">{{nameError}}</div>
							</div>
						</div>
						<div class="row mb-3">
							<label :for="`${id}-description`" class="col-sm-4 col-form-label">Description</label>
							<div class="col-sm-8">
								<textarea :id="`${id}-description`" class="form-control" v-model="description" rows="10"></textarea>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="modal.hide()">{{i18n.t('general.dialog-cancel')}}</button>
						<button type="submit" class="btn btn-primary">{{i18n.t(isNew ? 'pattern-list.create-tune-ok' : 'pattern-list.rename-tune-ok')}}</button>
					</div>
				</form>
			</div>
		</div>
	</Teleport>
</template>
