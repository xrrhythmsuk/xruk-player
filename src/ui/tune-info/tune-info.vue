<div class="bb-tune-info" v-if="tune">
	<div class="d-flex flex-wrap">
		<h1 class="flex-grow-1">{{tune.displayName || tuneName}}</h1>
		<InstrumentButtons :playback-settings="playbackSettings" :tune="tune" class="mb-4" />
	</div>

<ExampleSongPlayer
	v-if="tune.exampleSong"
	:tune-name="tuneName"
	:song="tune.exampleSong"
	:settings="playbackSettings"
/>

<p><em>Tap on the pattern names below to see the notes and mnemonics.</em></p>
	
<PatternPlaceholder
	:tune-name="tuneName"
	:pattern-name="patternName"
	:readonly="true"
	v-for="(pattern, patternName) in tune.patterns"
	:key="patternName"
	:settings="playbackSettings"
	v-slot="slotProps"
>
	<PatternPlaceholderItem><a href="javascript:" title="Download as MP3" v-b-tooltip.hover @click="slotProps.downloadMp3()"><fa icon="download"/></a></PatternPlaceholderItem>
</PatternPlaceholder>

<p v-if="tune.sheet"><a :href="tune.sheet" target="_blank"><strong>Tune sheet with mnemonics (PDF)</strong></a></p>

	<h2 v-if="tuneDescription">About</h2>
	<div v-if="isCustom" style="white-space:pre-wrap">{{tuneDescription}}</div>
	<div v-else v-html="tuneDescription"/>

	<div v-if="tune.video">
		<h2>Video</h2>
		<div class="bb-tune-info-video">
			<iframe sandbox="allow-same-origin allow-scripts" :src="tune.video" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>
</div>
