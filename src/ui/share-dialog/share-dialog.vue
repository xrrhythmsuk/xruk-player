<b-modal title="Share" :id="id" size="lg" modal-class="bb-share-dialog" @show="resetSelection()">

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


	<b-card class="mb-4">
		<p>
			Save as a file for archiving or emailing. Files can be opened using the <fa icon="file-import" /> <strong>Open</strong> menu option.
		</p>
		<div class="d-flex justify-content-center">
			<button class="btn btn-secondary" @click="save">
				<fa icon="file-audio" />
				Save
			</button>
		</div>
	</b-card>

	<b-card class="mb-4">
			<p>
			Share a magic link with others that will open the rhythms on their device.
			</p>
			<div class="d-flex justify-content-center">
				<button class="btn btn-secondary" @click="copyLink">
					<fa icon="link" />
					Copy link
				</button>
				<button v-if="canShare" class="btn btn-secondary" @click="share">
					<fa icon="share-from-square" />
					Share
				</button>
			</div>
		</div>
	</b-card>

	<div slot="modal-footer">
		<b-button @click="hide">Cancel</b-button>
	</div>

</b-modal>