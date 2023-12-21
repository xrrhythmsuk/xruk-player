<b-modal :title="title" @ok="submit()" :ok-disabled="!!invalidFeedback || !changed" :id="id" @show="initialize()" @hidden="$emit('hidden', $event)">
	<b-form class="form-horizontal" @submit="submit();">
		<b-form-group label="Tune name" :invalid-feedback="invalidFeedback" :state="!invalidFeedback">
			<b-form-input v-model="newName" :state="changed ? !invalidFeedback : null" autofocus />
		</b-form-group>
		<b-form-group label="Description">
			<b-form-textarea v-model="newDescription" :rows="10"  />
		</b-form-group>
	</b-form>
</b-modal>