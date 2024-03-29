import config, { Instrument } from "./config";
import { clone, TypedObject } from "./utils";
import { CompressedPattern, LegacyVolumeHack, normalizePattern, Pattern } from "./state/pattern";
import { GenericTune, normalizeTune, Tune } from "./state/tune";
import { PatternReference } from "./state/state";

type RawTune = { [i in keyof GenericTune<CompressedPattern>]?: GenericTune<CompressedPattern>[i] } & {
	time?: number;
};

const path = require.context('../assets/tunes', false, /\.ts$/)

const rawTunes : { [tuneName: string]: RawTune }  = Object.fromEntries(
		path.keys().map(key => [key.match(/\.\/(.+)\.ts/)![1], path(key).default]))

const defaultTunes: { [tuneName: string]: Tune } = {};

function cloneOf(input:string) {
	const m = input.match(/^@([a-z]{2})$/)
	return m ? m[1] as Instrument : null
}

function uncompressMnemonics(tuneName: string, target: Pattern, pattern: CompressedPattern, instr: Instrument){
	const source = pattern.mnemonics?.[instr]
	const clone = cloneOf(source || pattern[instr] || '')
	if (clone) return target.mnemonics?.[clone]
	if(!source) return undefined

	const words = source.split(/[\s\-]/)

	if(target[instr].filter(i => i !== " ").length !== words.length)
		console.warn(`Mnemonics length mismatch ${tuneName} ${target.displayName}: ${source}`, target[instr])

	let i = 0;
	return target[instr].map(p => p != ' ' ? words[i++] : '')
}

for (const i in rawTunes) {
	const tune = rawTunes[i];
	const newTune = clone(tune) as any as Tune;

	for (const j in tune.patterns) {
		const pattern = tune.patterns[j];
		const newPattern = clone(pattern) as any as Pattern;
		if (!newPattern.time && tune.time)
			newPattern.time = tune.time;

		for (const k of config.instrumentKeys) {
			const thisPattern = pattern[k] = pattern[k] || "";
			const m = cloneOf(thisPattern);
			if (m)
				newPattern[k] = clone(newPattern[m]);
			else {
				newPattern[k] = thisPattern.split('');
				newPattern.length = Math.max(newPattern.length || 0, newPattern[k].length - (pattern.upbeat || 0));
			}

			if (k == "ag")
				newPattern[k] = newPattern[k].map(function (it) { return it == "X" ? "o" : it; });
		}

		if(pattern.mnemonics){
			newPattern.mnemonics = {}
			for (const k of config.instrumentKeys) {
				newPattern.mnemonics[k as Instrument] = uncompressMnemonics(i, newPattern, pattern, k as Instrument)
			}
		}

		newPattern.length = Math.ceil(newPattern.length / (newPattern.time || 4));
		if (newPattern.length % 4)
			console.error(`Unusual length ${newPattern.length} for ${j} of ${i}.`);

		newTune.patterns[j] = normalizePattern(newPattern);
	}

	defaultTunes[i] = normalizeTune(newTune);

	const unknown = (defaultTunes[i].exampleSong || []).filter((patternName) => !defaultTunes[i].patterns[typeof patternName === 'string' ? patternName : patternName.patternName]);
	if (unknown.length > 0)
		console.error(`Unknown breaks in example song for ${i}: ${unknown.join(", ")}`);
}

Object.defineProperty(defaultTunes, "getPattern", {
	configurable: true,
	value: function (tuneName: string | PatternReference, patternName?: string): Pattern | null {
		if (Array.isArray(tuneName)) {
			patternName = tuneName[1];
			tuneName = tuneName[0];
		}

		return this[tuneName] && this[tuneName].patterns[<string>patternName] || null;
	}
});

Object.defineProperty(defaultTunes, "firstInSorting", {
	configurable: true,
	value: ["Core Breaks", "More Breaks"]
});

interface DefaultTunesMethods {
	getPattern(tuneName: string, patternName?: string): Pattern | null,
	getPattern(patternReference: PatternReference): Pattern | null,
	firstInSorting: Array<string>
}

type DefaultTunes = TypedObject<Tune> & DefaultTunesMethods;

export default <DefaultTunes>defaultTunes;