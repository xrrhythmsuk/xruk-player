import {  repeat, stretch } from "../../src/tuneHelper";

export default {
    categories: ["breaks", "onesurdo", "easy", "medium", "tricky"],
    sheet: require("./core-breaks.pdf"),
    description: require("./core-breaks.md").default,
    video: undefined,
    patterns: {
        'Whistle in': {
            ot: 'y       y       y   y   y   y   '
        },
        'Whistle in (long)': {
            ot: 'y               y               y       y       y   y   y   y   '
	},
        'Whistle in (short)': {
            ot: 'y   y   y   y   '
        },
        'Silence': {
            ls: repeat(16, ' ')
        },
        'Silence 2x': {
            ls: repeat(32, ' ')
        },
        'Silence 4x': {
            ls: repeat(64, ' ')
        },
	'4 Hits': {
            ls: repeat(4, 'X   '),
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls",
            sh: "@ls"
	},
	'8 Hits': {
            ls: repeat(8, 'X   '),
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls",
            sh: "@ls"
	},
        "Clave": {
            ls: 'X  X  X   X X   ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {  ls: "Shut the sy-stem down" }
        },
        "Clave 2x": {
            ls: repeat(2, 'X  X  X   X X   '),
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {  ls: "Shut the sy-stem down Shut the sy-stem down" }
        },
        "Clave 4x": {
            displayName: "Clave 4x soft to loud",
            ls: repeat(4, 'X  X  X   X X   '),
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {  ls: "Shut the sy-stem down Shut the sy-stem down Shut the sy-stem down Shut the sy-stem down" },
            volumeHack: { 0: .2, 16: .4, 32: .7, 48: 1 }
        },
        'Karla Break': {
            ls: repeat(12, 'XXXX') + 'X   ' + repeat(3, '    '),
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: repeat(12, 'X X ') + 'X',
            ag: '@ta',
            sh: '@ls',
            volumeHack: { 0: .2, 16: .4, 32: .7, 48: 1 }
        },
        'Progressive Karla': {
            ls: 'X   X   X   X   X X X X X X X X XXXXXXXXXXXXXXXXX               ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: 'X   X   X   X   X X X X X X X X X X X X X X X X X',
            ag: '@ta',
            sh: '@ls'
        },
	'Karla Clave': {
            displayName: 'e.g. Karla + Clave',
            ls: repeat(12, 'XXXX') + 'X  X  X   X X   ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: repeat(12, 'X X ') + 'X  X  X   X X',
            ag: '@ta',
            sh: '@ls',
            volumeHack: { 0: .2, 16: .4, 32: .7, 48: 1 }
        },
        'X Break': {
            ls: repeat(4, "X       X       X X X X X       "),
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls",
            sh: "@ls",
            ot: repeat(4, "  B C F   G H I             A   "),
            mnemonics: {  ot: repeat(4, "Ex-tinc-tion Re-bell-ion Hey! ") }
	},
        'A Break': {
            ls: 'X               ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            ot: '        J   K   ',
            mnemonics: {  ot: "Act now" }
        },
        'Knock On The Door': {
            loop: true,
            time: 12,
            ls: stretch(3, 12, 'X        XXX') + stretch(4, 12, 'X               X  X  X   X X X X               '),
            ms: '@ls',
            hs: '@ls',
            re: stretch(3, 12, 'X        XXX') + stretch(4, 12, 'X               X  X  X   X X X X X XX X X X XX '),
            sn: repeat(4, stretch(4, 12, 'X..XX..XX..XX..X')),
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {
                ls: "Hey, Knock on the door I want you to let me in",
                re: "Hey, Knock on the door I want you to let me in There's cu-stard in my un-der-pants"
            },
            volumeHack: { sn: { 0: 0.5 } }
    	}
    }
}
