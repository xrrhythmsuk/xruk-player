<div class="bb-pattern-list">
	<PatternListFilter v-model="filter" />

	<hr />

	<div class="bb-pattern-list-tunes">
		<b-card no-body v-for="tune in visibleTunes" :key="tune.tuneName">
			<b-card-header>
				<b-button block @click="toggleTune(tune.tuneName)" variant="link">
					{{tune.displayName}}
					<fa v-if="tune.isCustom" icon="star" title="User-created tune" v-b-tooltip/>
					<fa icon="caret-down"/>
				</b-button>
			</b-card-header>
			<Collapse v-model="isOpened[tune.tuneName]" :id="tune.collapseId" :height="tune.height">
				<b-card-body>
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
				</b-card-body>
			</Collapse>
		</b-card>
	</div>

	<div class="general-actions">
		<a href="javascript:" @click="createTune()"><fa icon="plus"/> New tune</a>
	</div>

	<ShareDialog v-if="showShare" :id="showShare.id" :tune-name="showShare.tuneName"/>

	<RenamePatternDialog v-if="showRenamePattern" :id="showRenamePattern.id" :tune-name="showRenamePattern.tuneName" :pattern-name="showRenamePattern.patternName" @hidden="showRenamePattern = null"/>
	<RenameTuneDialog v-if="showRenameTune" :id="showRenameTune.id" :tune-name="showRenameTune.tuneName" @hidden="showRenameTune = null"/>
</div>