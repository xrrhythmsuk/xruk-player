import {  repeat, stretch } from "../../src/tuneHelper";

export default {
    categories: ["breaks", "onesurdo", "easy", "medium", "tricky"],
    sheet: require("./general-breaks.pdf"),
    description: require("./more-breaks.md").default,
    video: undefined,
    patterns: {
        'Broccoli': {
            ls: "            X   ",
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls"
        },
        'Boom Break': {
            ls: 'X               ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls'
        },
        'Capped Karla': {
            loop: true,
            ls: 'XXXXXXXXXXXXXXXXX               ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: 'X X X X X X X X X',
            ag: '@ta',
            volumeHack: { 0: .2, 4: .4, 8: .7, 12: 1 }
        },
        'Flappy Mouth': {
            time: 3,
            ls: 'X  XXXX     ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            ot: '         A  '
        },
        'Conga': {
            loop: true,
            ls: "X     X X   X X X     X X   X X X   X   X   X   X   X   X   X   ",
            ms: "@ls",
            hs: "@ls"
        },
        'Little Cat': {
            loop: true,
            upbeat: 2,
            re: "X X     X X X X X   X X X X   X   X X X X X   X                   ",
            ta: "@re",
            ag: "@re"
        },
        'Little Cat (Alt Repi)': {
            loop: true,
            re: "f   X X r r X X "
        },
        'Capped Karla (Little Cat)': {
            loop: true,
            re: 'XXXXXXXXXXXXXXXXf   X X r r X X ',
            sn: '@re',
            volumeHack: { 0: .2, 4: .4, 8: .7, 12: 1 }
        },
        'Bunny Ears': {
            ls: repeat(2, "                X X X X X  XX   ") + repeat(2, "        X X X   ") + "    X X     X X     XX XX X X   ",
            ms: "@ls",
            hs: "@ls",
            re: repeat(2, "X X X X X  XX                   ") + repeat(2, "XX XX           ") + "X X     X X     X X XX XX X X",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls"
        },
        'Wolf Break': {
            ls: 'X X   XXX X    XX X    XX X     X X   XXX X    XX X X X X       ',
            ms: '@ls',
            hs: '@ls',
            re: '    X       X       X       X       X       X  XX X X X X       ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            ot: '                                                          E D   '
        },
        'Hardcore Break': {
            ls: repeat(2, '              XXX             XXX             XXX       XXXXXXXX') + repeat(2, 'X X X X X X X XXX X X X X X X XXX X X X X X X XXX X X X XXXXXXXX'),
            ms: '@ls',
            hs: '@ls',
            re: repeat(1, '              XXX             XXX             XXX       XXXXXXXX') + repeat(3, 'X X X X X X X XXX X X X X X X XXX X X X X X X XXX X X X XXXXXXXX'),
            sn: '@re',
            ta: '@re',
            ag: repeat(3, 'o o o o o o o ooo o o o o o o ooo o o o o o o ooo o o o oooooooo') + repeat(1, 'a a a a a a a aaa a a a a a a aaa a a a a a a aaa a a a aaaaaaaa'),
            volumeHack: {
                ls: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                ms: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                hs: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                re: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                sn: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                ta: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 }
            }
        }
    }
}
