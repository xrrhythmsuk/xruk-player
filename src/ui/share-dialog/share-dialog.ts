import jsonFormat from 'json-format';
import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./share-dialog.vue";
import "./share-dialog.scss";
import {
	compressState,
	getPatternFromState,
	getSongName,
	getSortedTuneList,
	PatternReference,
	State
} from "../../state/state";
import { InjectReactive, Prop } from "vue-property-decorator";
import defaultTunes from "../../defaultTunes";
import { Pattern, patternEquals } from "../../state/pattern";
import { objectToString } from "../../utils";
import { makeAbsoluteUrl } from "../../services/utils";
import { songContainsPattern } from "../../state/song";
import Collapse from '../utils/collapse';
import FileSaver from 'file-saver';

@WithRender
@Component({components: { Collapse }})
export default class ShareDialog extends Vue {

	@InjectReactive() readonly state!: State;

	@Prop({type: String, required: true}) readonly id!: string;
	@Prop(Array) readonly linkPattern?: PatternReference;
	@Prop(String) readonly tuneName?: string;
	index: number = 0
	customiseExpanded: boolean = false
	shareSongs: { [songIdx: number]: boolean } = { };
	sharePatterns: { [tuneName: string]: { [patternName: string]: boolean } } = { };
	songCount() { return Object.values(this.shareSongs).filter(x => x).length }
	tuneCount() { return Object.keys(this.sharePatterns).map(this.getTuneClass).filter(c => c == 'active').length }
	patternCount() { return Object.keys(this.sharePatterns).filter(t => this.getTuneClass(t) == 'list-group-item-info').map(t => Object.values(this.sharePatterns[t]).filter(x=>x).length).reduce((x,y) => x+y, 0) }
	get selectionCount() { 
		const s = this.songCount(), t = this.tuneCount(), p = this.patternCount()
		return [
			s? s == 1 ? `1 song` : `${s} songs` : '',	
			t? t == 1 ? `1 tune` : `${t} tunes` : '',
			p? p == 1 ? `1 break` : `${p} breaks` : ''
		].filter(x => x).join(', ')
	}

	get canShare() { 
		return navigator.canShare?.({url:this.url})
	}

	share() { 
		this.hide()

		navigator.share?.({
			url: this.url
		})
		
	}

	hide() { 
		this.$bvModal.hide(this.id)
	}

	copyLink() { 
		window.navigator.clipboard.writeText(this.url)
		this.hide()
	}

	save() { 
		this.hide()
		const blob = new Blob([this.rawStringUncompressed], { type: 'application/rhythm+json' });
		FileSaver.saveAs(blob, `${this.tuneName || "tunes"}.rhythm`)
	}

	resetSelection() {
		this.shareSongs = { };
		if(this.linkPattern) {
			this.sharePatterns = {
				[this.linkPattern[0]]: {
					[this.linkPattern[1]]: true
				}
			};
		} else if (this.tuneName){
			const patternNames = Object.keys(this.state.tunes[this.tuneName].patterns)
			this.sharePatterns = { 
				[this.tuneName]: Object.fromEntries(patternNames.map(p => [p, true]))
			}
		}
		else {
			this.shareSongs = {
				[this.state.songIdx]: true
			};
			this.sharePatterns = { };
		}
	}

	getModifiedPatternNames(tuneName: string) {
		const ret = [ ];
		for(const patternName in this.state.tunes[tuneName].patterns) {
			const originalPattern = defaultTunes.getPattern(tuneName, patternName);
			const pattern = getPatternFromState(this.state, tuneName, patternName) as Pattern;
			if(!originalPattern || !patternEquals(pattern, originalPattern))
				ret.push(patternName);
		}
		return ret;
	}

	_getCompressedState(encode: boolean) {
		return compressState(this.state,
			(songIdx) => this.shareSongs[songIdx],
			(tuneName, patternName) => !!this.shouldExportPattern(tuneName, patternName),
			encode
		);
	}

	get sortedTuneList() {
		return getSortedTuneList(this.state);
	}

	get rawStringUncompressed() {
		return jsonFormat(this._getCompressedState(false));
	}

	get rawStringCompressed() {
		return jsonFormat(this._getCompressedState(true));
	}

	get url() {
		let onlyTune: string | false | null = null;
		let onlyPattern: PatternReference | false | null = null;
		for(const tuneName in this.sharePatterns) {
			const patternNames = this.getModifiedPatternNames(tuneName);
			for(let i=0; i<patternNames.length; i++) {
				const patternName = patternNames[i];

				if(this.shouldExportPattern(tuneName, patternName)) {
					if(onlyTune == null)
						onlyTune = tuneName;
					else if(onlyTune != tuneName)
						onlyTune = false;

					if(onlyPattern == null)
						onlyPattern = [ tuneName, patternName ];
					else
						onlyPattern = false;
				}
			}
		}

		let query = { import: encodeURIComponent(objectToString(this._getCompressedState(true))) }
		let url
		if(onlyPattern)
			url = this.$router.resolve({ name:'listen pattern', params: { tuneName: onlyPattern[0], patternName: onlyPattern[1] }, query })
		else if(onlyTune)
			url = this.$router.resolve({ name:'listen', params: { tuneName: onlyTune }, query })
		else
			url = this.$router.resolve({ name:'import', params: {  importData: query.import }})


		return makeAbsoluteUrl(url.href);
	}

	getTuneClass(tuneName: string) {
		const patternNames = this.getModifiedPatternNames(tuneName);
		const enabled = patternNames.filter((patternName) => this.shouldExportPattern(tuneName, patternName)).length;

		if(enabled == 0)
			return "";
		else if(enabled == patternNames.length)
			return "active";
		else
			return "list-group-item-info";
	}

	isUsedInSong(tuneName: string, patternName: string) {
		return this.state.songs.some((song, songIdx) => this.shareSongs[songIdx] && songContainsPattern(song, tuneName, patternName));
	}

	shouldExportPattern(tuneName: string, patternName: string) {
		if(this.isUsedInSong(tuneName, patternName))
			return 2;
		else
			return this.sharePatterns[tuneName] && this.sharePatterns[tuneName][patternName] ? 1 : 0;
	}

	clickTune(tuneName: string) {
		const enable = (this.getTuneClass(tuneName) != "active");
		Vue.set(this.sharePatterns, tuneName, { });
		if(enable) {
			for(const i in this.state.tunes[tuneName].patterns) {
				Vue.set(this.sharePatterns[tuneName], i, true);
			}
		}
	}

	togglePattern(tuneName: string, patternName: string) {
		if(!this.sharePatterns[tuneName])
			Vue.set(this.sharePatterns, tuneName, {});
		Vue.set(this.sharePatterns[tuneName], patternName, !this.sharePatterns[tuneName][patternName]);
	}

	getSongName(idx: number) {
		return getSongName(this.state, idx);
	}

}