import {  repeat, stretch } from "../../src/tuneHelper";
import sheet from "./core-breaks.pdf?url"

export default {
    displayName: "Core Breaks and Signs",
    categories: ["breaks", "onesurdo", "easy", "medium", "tricky"],
    descriptionFilename: "core-breaks",
    speed: 100,
    sheet,
    video: undefined,
    patterns: {
        'Whistle in': {
            description: "*Whistle and count on your fingers*\n1, 2, 1 2 3 4 (two bars)",
            ot: 'y       y       y   y   y   y   '
        },
        'Whistle in (long)': {
            description: "*Whistle and count on your fingers*\n1... 2... 1, 2, 1 2 3 4 (four bars)",
            ot: 'y               y               y       y       y   y   y   y   '
	},
        'Whistle in (short)': {
            ot: 'y   y   y   y   '
        },
        'Silence': {
            description: "*Hold up 4 fingers*\nFour silent beats (1 bar)",
            ls: repeat(16, ' ')
        },
        'Silence 2x': {
            description: "*Hold up 8 fingers*\nEight silent beats (2 bars)",
            ls: repeat(32, ' ')
        },
        'Silence 4x': {
            description: "*8 fingers pointing down*\nSixteen silent beats (4 bars)",
            ls: repeat(64, ' ')
        },
	'4 Hits': {
            description: "*Fist and 4 horizontal fingers*\nHit four beats",
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
            description: "*Fist and 4 horizontal fingers turning*\nHit eight beats",
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
            description: "*Finger and thumb U*\nUsually pronounced CLAH-vay",
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
            description: "*Clave sign in each hand*\nTwo bars of clave",
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
            description: "*Clave and 4 horizontal fingers, all rising*\nFour bars of clave going from quiet to loud",
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
            description: "*Thumb and two fingers*\nA bar of 16s quiet, then medium, then loud, then a hit just on beat 1",
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
            description: "*Grab thumb of raised hand*\nA bar of 4s, then 8s, then 16s, then a hit just on beat 1",
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
            description: "*Karla Break sign, then Clave sign*\nKarla Break with the last bar replaced by clave",
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
            description: "*Crossed forearms or sticks*\nGood to discuss ahead of time whether you’re doing this one at non-XR events",
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
            description: "*Forearms make an upside-down V*\nTry changing the shout for specific actions!",
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
            description: "*Knock on palm*\nThis is good as a transition between songs or an alternate line for one or two instruments",
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
