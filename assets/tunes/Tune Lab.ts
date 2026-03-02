import {  repeat } from "../../src/tuneHelper";

export default {
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
        'Angel Break 1': {
            ls: 'X X X X XX X XX',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {  ls: "Don't wait for an an-gel to app-ear" }
        },
        'Angel Break 2': {
            ls: 'X   X     XX    ',
            ms: '@ls',
            hs: '@ls',
            sh: 'X   .   .   .   ',
            mnemonics: {  ls: 'Ha-loes are go' }
        },
        'Pancake Break': {
            loop: true,
            re: 'xxx xxx xxx xxx   xxx xxx xxx xx',
            sh: 'X   .   .   .',
            mnemonics: {  re: repeat(4, "Going to flip ") + repeat(4, "Going to flop ") }
        },
        'Whoopi Break': {
            loop: true,
            ta: '    X X     X   ',
            sh: 'X   .   .   .   ',
            mnemonics: {  ta: 'Clapp-ing hands' }
        },
        'Funk Break 1 (Conga)': {
            loop: true,
            ls: 'X X     X X   X X X     X       X   X   X   X   X   X   X   X   ',
            ms: '@ls',
            hs: '@ls',
            sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   ',
            mnemonics: {  ls: "Boil them Mash them Just give us spuds Ve-ry ta-sty ve-ry ta-sty" }
        },
        'Forest Thump': {
            loop: true,
            ls: 'X   r   XX XX X X   r   XX XX X X   r   XX XX X X   r   X  X  X',
            ms: 'X XX XX X   r X X XX XX X   r X X XX XX X   r X X   r   X  X  X',
            hs: '@ms',
            re: 'X XX  f XX XXrf X XX  f XX XXrf X XX  f XX XXrf X   r f Xr Xr f',
            sn: 'X.......X.....X X.......X.....X X.......X.....X X   r f XX XX X',
            ta: 'X XX XX XX XX X X XX XX XX XX X X XX XX XX XX X X   r   XX XX X',
            ag: 'o oa oa o     o o oa oa o     o o oa oa o     o o   r   oa oa o',
            sh: 'X...X...X...X...X...X...X...X...X...X...X...X...X       X  X  X',
            mnemonics: {
                ls: repeat(3, "We like bang-ing our drums 'cause ") + "We are For-est Thump"),
                ms: repeat(3, "We can play all day long be-cause ") + "We are For-est Thump")
            }
        },
		'Forest Thump Break 1': {
            ls: 'X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: 'o oa oa o  a  o',
            sh: '@ls',
            mnemonics: {
                ls: "We're For-est For-est For-est Thump",
                ag: "We're For-est For-est For-est Thump"
            }
        },
        'Forest Thump Break 2': {
            ls: 'X XX XX         X XX XX         X XX XX       X X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: '        XX XX X         XX XX X         XX XX X X XX XX X  X  X',
            sn: '@re',
            ta: '@re',
            ag: '        oo oo o         oo oo o         oo oo o o oa oa o  a  o',
            sh: '@re',
            mnemonics: {
                ls: repeat(3, "We all love the land ") + "We're For-est For-est For-est Thump",
                re: repeat(3, "We are the for-est ") + "We're For-est For-est For-est Thump",
                ag: repeat(3, "We are the for-est ") + "We're For-est For-est For-est Thump"
            }
        },
        'Forest Thump Break 3': {
            ls: 'X       XX XX X X             X X             X X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: 'X             X X       XX XX X X             X X XX XX X  X  X',
            sn: '@re',
            ta: 'X             X X             X X       XX XX X X XX XX X  X  X',
            ag: 'o             o o             o o       oa oa o o oa oa o  a  o',
            sh: 'X             X X             X X             X X XX XX X  X  X',
            ot: '    A               A               A'
        },
        'Forest Thump Break 5': {
            ls: 'X             X X             X X             X X XX XX X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: 'X f XXr XXr r X X rrr f XXrrr X X rX rX XXr r X X XX XX X  X  X',
            sn: '@ls',
            ta: '@ls',
            ag: 'o             o o             o o             o o oa oa o  a  o',
            sh: '@ls'
        }
    }
}
