<b-form @submit.prevent="submit()">
	<b-form-group :invalid-feedback="invalidFeedback" :state="!invalidFeedback">
		<b-form-input v-model="value" :state="!invalidFeedback" autofocus />
		<slot/>
	</b-form-group>
</b-form>