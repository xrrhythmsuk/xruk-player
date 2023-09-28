<!-- <b-modal :title="title" @ok="submit()" :ok-disabled="exists || !changed" :id="id" @show="initialize()" @hidden="$emit('hidden', $event)"> -->
	<b-form class="form-horizontal" @submit="submit();">
		<b-form-group label="Tune name" :invalid-feedback="invalidFeedback" :state="!invalidFeedback">
			<b-form-input v-model="name" :state="!invalidFeedback" autofocus />
		</b-form-group>
		<b-form-group label="Description" :invalid-feedback="invalidFeedback" :state="!invalidFeedback">
			<b-form-textarea v-model="description" :max-rows="10"  />
		</b-form-group>
	</b-form>