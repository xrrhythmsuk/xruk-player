<b-modal title="Share" :id="id" size="lg" 
footer-border-variant="blue"
modal-class="bb-share-dialog" @show="resetSelection()">

	<b-button block  class="mb-4" variant="link" @click="customiseExpanded=!customiseExpanded">
		Customise selection ({{selectionCount}})
		<fa icon="caret-down"/>
	</b-button>

	<Collapse v-model="customiseExpanded" id="customise">
	<table id="selection" class="table table-sm">
		<thead>
			<tr>
				<th>Songs</th>
				<th>Tunes/Breaks</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<b-list-group>
						<b-list-group-item
							v-for="(song, idx) in state.songs"
							:key="idx"
							:active="shareSongs[idx]"
							href="javascript:"
							@click="$set(shareSongs, idx, !shareSongs[idx])"
						>
							{{getSongName(idx)}}
						</b-list-group-item>
					</b-list-group>
				</td>
				<td>
					<b-list-group>
						<b-list-group-item v-for="tuneName in sortedTuneList" :key="tuneName" :class="getTuneClass(tuneName)" v-if="getModifiedPatternNames(tuneName).length > 0">
							<a href="javascript:" @click="clickTune(tuneName)">{{state.tunes[tuneName].displayName || tuneName}}</a>
							<b-badge
								href="javascript:"
								v-for="patternName in getModifiedPatternNames(tuneName)"
								:key="patternName"
								class="bb-inline-list-group-item"
								:disabled="!!shouldExportPattern(tuneName, patternName) > 1"
								@click="togglePattern(tuneName, patternName)"
								:title="linkPattern && linkPattern[0] == tuneName && linkPattern[1] == patternName ? 'Will be opened by default' : isUsedInSong(tuneName, patternName) ? 'Used in song, cannot be disabled' : ''"
								v-b-tooltip.hover.bottom
								:variant="!!shouldExportPattern(tuneName, patternName) ? 'dark' : 'light'"

							>
								{{state.tunes[tuneName].patterns[patternName].displayName || patternName}} <fa icon="star" v-if="linkPattern && linkPattern[0] == tuneName && linkPattern[1] == patternName" />
							</b-badge>
						</b-list-group-item>
					</b-list-group>
				</td>
			</tr>
		</tbody>
	</table>
	</Collapse>

	<b-tabs v-model="index">
		<b-tab title="Link">
		<p class="mt-4">
			Sharing a link lets others open the rhythms directly on their device.
		</p>
	</b-tab>

	<b-tab title="Download">
			<p class="mt-4">
			Download a file to keep a copies or send as an attachment to others. Files can be opened using <nobr><fa icon="file-import" /> <strong>Open</strong></nobr> in the Tools menu.
			</p>
		</div>
	</b-tab>
	</b-tabs>

	<div slot="modal-footer">
		<template v-if="index === 0">
			<b-button v-if="canShare" @click="share" variant="primary"><fa icon="share-from-square" /> Share</b-button>
			<b-button v-else @click="copyLink" variant="primary"><fa icon="link" /> Copy link</b-button>
		</template>
		<b-button v-else @click="save" variant="primary"><fa icon="file-audio" /> Download</b-button>
		<b-button @click="hide">Cancel</b-button>
	</div>

</b-modal>