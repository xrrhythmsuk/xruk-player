import {  repeat, crescendo } from "../../src/tuneHelper";

export default {
	displayName: "... from the Tune Lab",
    categories: ["new", "tricky", "proposed"],
    sheet: undefined,
    description: require("./tune-lab.md").default,
    video: undefined,
    patterns: {
        'Angel': {
            loop: true,
            ls: repeat(4, 'X X     '),
            ms: repeat(4, '    X X '),
            hs: '@ms',
            re: repeat(4, 'X  X  X '),
            sn: repeat(4, 'X..X..X.'),
            ta: 'X X X X X X X X XX',
            ag: repeat(2, 'a a o o aa o oo '),
            sh: repeat(4, 'X.......'),
            mnemonics: {
                ls: repeat(4, "An-gel "),
                ms: repeat(4, "fly-ing "),
                re: repeat(4, "White fea-thers "),
                sn: repeat(4, "White . . fea . . thers . "),
                ta: "Guess what you don't need to be an an-gel",
                ag: repeat(2, "Don't wait for an an-gel to app-ear ")
            }
        },
        'Angel, Break 1': {
            ls: 'X X X X XX X XX',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
			sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {  ls: "Don't wait for an an-gel to app-ear" }
        },
        'Angel, Break 2': {
            ls: 'X   X     XX    ',
            ms: '@ls',
            hs: '@ls',
            sh: 'X   .   .   .   ',
            mnemonics: {  ls: "Ha-loes Let's go" }
        },
        'Pancake Break': {
            loop: true,
            re: 'XXX XXX XXX XXX   XXX XXX XXX   ',
            sh: 'X   .   .   .   X   .   .   .   ',
            mnemonics: {  re: repeat(4, "Going to flip ") + repeat(3, "Going to flop ") }
        },
        'Whoopi Break': {
            loop: true,
            re: '    X X     X   ',
			sn: '@re',
			ta: '@re',
			ag: '@re',
            sh: 'X   .   .   .   ',
            mnemonics: {  re: 'Clapp-ing hands' }
        },
        'Funk, Break 1 (Conga)': {
            loop: true,
            ls: 'X X     X X   X X X     X       X   X   X   X   X   X   X   X   ',
            ms: '@ls',
            hs: '@ls',
            sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   ',
            mnemonics: {  ls: "Boil them Mash them Just give us spuds Ve-ry ta-sty ve-ry ta-sty" }
        },
        'Forest Thump (Draft)': {
            loop: true,
            ls: 'X   r   XX XX X X   r   XX XX X X   r   XX XX X X   r   X  X  X',
            ms: 'X XX XX X   r X X XX XX X   r X X XX XX X   r X X   r   X  X  X',
            hs: '@ms',
            re: 'X XX  f XX XXrf X XX  f XX XXrf X XX  f XX XXrf X   r   Xr Xr f',
            sn: 'X.......X.....X X.......X.....X X.......X.....X X   r   XX XX X',
            ta: 'X XX XX X  X  X X XX XX X  X  X X XX XX X  X  X X   r   XX XX X',
            ag: 'o oa oa o     o o oa oa o     o o oa oa o     o o   r   oa oa o',
            sh: 'X...X...X...X...X...X...X...X...X...X...X...X...X       X  X  X',
            mnemonics: {
                ls: repeat(3, "We like bang-ing our drums 'cause ") + "We are For-est Thump",
                ms: repeat(3, "We can play all day long be-cause ") + "We are For-est Thump",
				ta: repeat(3, "We all love the land, For-est Thump ") + "We are, we are the for-est",
				ag: repeat(3, "We can play all day long 'cause ") + "We are, we are the for-est"
            }
        },
		'Forest Thump (Draft), Break 1': {
            ls: 'X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: 'o oa oa o  a  o',
            sh: '@ls',
            mnemonics: {
                ls: "We all love the land For-est Thump",
                ag: "We all love the land For-est Thump"
            }
        },
        'Forest Thump (Draft), Break 2': {
            ls: 'X XX XX         X XX XX         X XX XX         X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: '        XX XX X         XX XX X         XX XX X X XX XX X  X  X',
            sn: '@re',
            ta: '@re',
            ag: '        oo oo o         oo oo o         oo oo o o oa oa o  a  o',
            sh: '@re',
            mnemonics: {
                ls: repeat(3, "We all love the land ") + "We all love the land For-est Thump",
                re: repeat(3, "We are the for-est ") + "We all love the land For-est Thump",
                ag: repeat(3, "We are the for-est ") + "We all love the land For-est Thump"
            }
        },
        'Forest Thump (Draft), Break 3': {
            ls: 'X       XX XX X X             X X             X X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: 'X             X X       XX XX X X             X X XX XX X  X  X',
            sn: '@re',
            ta: 'X             X X             X X       XX XX X X XX XX X  X  X',
            ag: 'o             o o             o o       oa oa o o oa oa o  a  o',
            sh: 'X             X X             X X             X X XX XX X  X  X',
            ot: '    A               A               A',
			mnemonics: {
				ls: "X We are the for-est X X X X We all love the land For-est Thump",
				re: "X X We are the for-est X X We all love the land For-est Thump",
				ta: "X X X X X We are the for-est We all love the land For-est Thump",
				ag: "X X X X X We are the for-est We all love the land For-est Thump",
				ot: "Hey! Hey! Hey!"
			}
        },
        'Forest Thump (Draft), Break 5': {
            ls: 'X             X X             X X             X X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: 'X XX  f XX XXrf X XX  f XX XXrf X XX  f XX XXrf X XX XX X  X  X',
            sn: '@ls',
            ta: '@ls',
            ag: 'o             o o             o o             o o oa oa o  a  o',
            sh: '@ls'
        },
		'Nova Balanca': {
			displayName: 'Nova Balança',
			loop: true,
			ls: 'X  X  XX      X ',
			ms: '      XXX  X  X ',
			hs: '@ms',
			re: 'XX  X       X   ',
			sn: '....X...XX..X...',
			ta: 'X  XX X X  XX X ',
			ag: 'o  oa o o  oa o ',
			sh: '................',
			mnemonics: {
				ls: "O-pen it up Let's",
				ms: "And let's shut it down",
				re: "Flip it round round",
				sn: ". . . . Back . . . Push it . . back . . .",
				ta: "Turn it o-ver Turn it o-ver",
				ag: "Turn it o-ver Turn it o-ver"
			}
		},
		'Nova Balanca 1': {
			displayName: 'Nova Balança, Break 1',
			ls: 'X X X X X X X X XX              ',
			ms: '@ls',
			hs: '@ls',
			re: '@ls',
			sn: '@ls',
			ta: '@ls',
			ag: '@ls',
			sh: '@ls',
			volumeHack: crescendo(17),
			mnemonics: {  ls: "Shake it up from top to bo-ttom Flip it" }
		},
		'Nova Balanca 2': {
			displayName: 'Nova Balança, Break 2',
			ls: 'X   X   X   X   ',
			ms: '@ls',
			hs: '@ls',
			re: '  X   X  X X  X ',
			sn: '@re',
			ta: '@re',
			ag: '@re',
			sh: '@re',
			mnemonics: {
				ls: "1 3 still fix",
				re: "2 4 got to more"
			}
		},
		'Nova Balanca Call': {
			displayName: 'Nova Balança, Call Break',
			ls: repeat(2, '    X     X     '),
			ms: '@ls',
			hs: '@ls',
			re: '@ls',
			sn: repeat(2, 'XXXX  XXXX      '),
			ta: '@ls',
			ag: '@ls',
			sh: '@ls',
			mnemonics: {
				ls: repeat(4, "up "),
				sn: repeat(4, "Time to change it ")
			}
		},
		'Knock On The Door (Bhangra)': {
			loop: true,
			time: 3,
			speed: 120,
			ls: 'X        XXXX           XXXXXXXXXXXXX           ',
			ms: '@ls',
			hs: '@ls',
			re: '@ls',
			sn: 'X..X..X..X..X..X..X..X..X..X..X..X..XXXX  XXXX  ',
			ta: 'X        XXXX           X XX XX XX XX           ',
			ag: '@ta',
			sh: '@ls',
			mnemonics: {
				ls: "Hey Knock on the door How ma-ny times have I got to tell you that I'm here?",
				ta: "Hey Knock on the door I keep as-king you to let me in"
			}
		},
		'Hardcore Break (Bhangra)': {
			time: 3,
			speed: 120,
			ls: repeat(2, '          XXX         XXX           XXXX  XXXX  ') +
				repeat(2, 'X XX XX XXXXX XX XX XXXXX XX XX XX XXXXX  XXXX  '),
			ms: '@ls',
			hs: '@ls',
			re:           '          XXX         XXX           XXXX  XXXX  '  +
				repeat(3, 'X XX XX XXXXX XX XX XXXXX XX XX XX XXXXX  XXXX  '),
			sn: '@re',
			ta: '@re',
			ag: repeat(3, 'o oo oo ooooo oo oo ooooo oo oo oo ooooo  oooo  ') +
				          'a aa aa aaaaa aa aa aaaaa aa aa aa aaaaa  aaaa  ',
			sh: '@re',
			mnemonics: {
				ls: repeat(2, "Here we go Here we go Dan-cing a lot, like it or not ") +
					repeat(2, ". . . . . . . Here we go . . . . . . Here we go . . . . . . . Dan-cing a lot, like it or not "),
				re: "Here we go Here we go Dancing a lot, like it or not " +
					repeat(3, ". . . . . . . Here we go . . . . . . Here we go . . . . . . . Dan-cing a lot, like it or not "),
				ag: repeat(4, ". . . . . . . Here we go . . . . . . Here we go . . . . . . . Dan-cing a lot, like it or not ")
			},
			volumeHack: {
				ls: { 50: .3, 59: 1, 62: .3, 71: 1, 74: .3, 85: 1, 98: .6, 107: 1, 110: .6, 119: 1, 122: .6, 133: 1 },
				ms: { 50: .3, 59: 1, 62: .3, 71: 1, 74: .3, 85: 1, 98: .6, 107: 1, 110: .6, 119: 1, 122: .6, 133: 1 },
				hs: { 50: .3, 59: 1, 62: .3, 71: 1, 74: .3, 85: 1, 98: .6, 107: 1, 110: .6, 119: 1, 122: .6, 133: 1 },
				re: { 50: .3, 59: 1, 62: .3, 71: 1, 74: .3, 85: 1, 98: .6, 107: 1, 110: .6, 119: 1, 122: .6, 133: 1 },
				sn: { 50: .3, 59: 1, 62: .3, 71: 1, 74: .3, 85: 1, 98: .6, 107: 1, 110: .6, 119: 1, 122: .6, 133: 1 },
				ta: { 50: .3, 59: 1, 62: .3, 71: 1, 74: .3, 85: 1, 98: .6, 107: 1, 110: .6, 119: 1, 122: .6, 133: 1 },
				sh: { 50: .3, 59: 1, 62: .3, 71: 1, 74: .3, 85: 1, 98: .6, 107: 1, 110: .6, 119: 1, 122: .6, 133: 1 }
            }
		}
    }
}
