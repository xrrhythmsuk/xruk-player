<div class="bb-pattern-list">
	<PatternListFilter v-model="filter" />

	<h3>Songs</h3>
	<div class="bb-pattern-list-songs d-flex flex-column">
		<router-link :to="{name:'song', params: { songName: song.name }}" 
			:key="song.name" v-for="song in state.songs">
					{{song.name}}
			</router-link>
			<div class="general-actions">
		<router-link :to="{name:'compose'}"><fa icon="plus"/> New tune</router-link>
	</div>
	</div>

	<h3>Tunes</h3>
	<div class="bb-pattern-list-tunes">
		<div v-for="tune in visibleTunes" :key="tune.tuneName" :class="{open:isOpened[tune.tuneName]}">

			<a class="d-flex tune" href="javascript:void(0)" @click="toggleTune(tune.tuneName)">
				<span class="flex-grow-1">
					{{tune.displayName}}
				</span>
				<fa icon="caret-down" class="caret"/>
			</a>

			<Collapse v-model="isOpened[tune.tuneName]" :id="tune.collapseId" :height="tune.height">
					<PatternPlaceholder v-for="pattern in tune.patterns" :key="pattern.patternName" :tune-name="tune.tuneName" :pattern-name="pattern.patternName" :draggable="true">
						<PatternPlaceholderItem><a href="javascript:" :title="`Copy${pattern.isCustom ? '/Move/Rename' : ''} break`" v-b-tooltip.hover @click="copyPattern(tune.tuneName, pattern.patternName)"><fa icon="copy"/></a></PatternPlaceholderItem>
						<PatternPlaceholderItem v-if="pattern.isCustom"><a href="javascript:" title="Remove" v-b-tooltip.hover @click="removePatternFromTune(tune.tuneName, pattern.patternName)"><fa icon="trash"/></a></PatternPlaceholderItem>
						<slot :tune-name="tune.tuneName" :pattern-name="pattern.patternName"/>
					</PatternPlaceholder>
					<div class="tune-actions">
						<a href="javascript:" @click="createPatternInTune(tune.tuneName)" title="New break" v-b-tooltip.hover><fa icon="plus"/></a>
						<a v-if="tune.isCustom" href="javascript:" @click="renameTune(tune.tuneName)" title="Rename tune" v-b-tooltip.hover><fa icon="pen"/></a>
						<a href="javascript:" @click="copyTune(tune.tuneName)" title="Copy tune" v-b-tooltip.hover><fa icon="copy"/></a>
						<a v-if="tune.isCustom" href="javascript:" @click="shareTune(tune.tuneName)" title="Share tune" v-b-tooltip.hover><fa icon="share-from-square"/></a>
						<a v-if="tune.isCustom" href="javascript:" @click="removeTune(tune.tuneName)" title="Remove tune" v-b-tooltip.hover><fa icon="trash"/></a>
					</div>
			</Collapse>
		</div>
	</div>

	<div class="general-actions">
		<a href="javascript:" @click="createTune()"><fa icon="plus"/> New tune</a>
	</div>

	<ShareDialog v-if="showShare" :id="showShare.id" :tune-name="showShare.tuneName"/>

	<RenamePatternDialog v-if="showRename" :id="showRename.id" :tune-name="showRename.tuneName" :pattern-name="showRename.patternName" @hidden="showRename = null"/>
</div>