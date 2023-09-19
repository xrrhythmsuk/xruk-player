import { repeat  } from "../../src/tuneHelper"
export default {
    categories: ["common", "medium"],
    sheet: require("./custard.pdf"),
    description: require("./custard.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: '0   X   0   X X ',
            ms: 'X   0   X   0   ',
            hs: 'X X 0   XX X0   ',
            re: '  XX  XX  XX  XX',
            sn: 'X.X.X..X.X..X...',
            ta: 'X X XX X X X XX ',
            ag: 'a a oo a a o oo ',
            sh: '................'
        },
        'Break 1': {
            ls: repeat(3, 'X X XX          ') + 'X X XX X X X XX ',
            ms: '@ls',
            hs: '@ls',
            re: repeat(3, '       X X X XX ') + 'X X XX X X X XX ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re'
        },
        'Break 2': {
            ls: repeat(3, '       X X X XX ') + 'X X XX X X X XX ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@re',
            ta: repeat(3, 'X X XX          ') + 'X X XX X X X XX ',
            ag: '@ls',
            sh: '@ls'
        },
        'Break 3 Agogo': {
            displayName: 'Break 3 (Agogô continues)',
            ls: repeat(4, 'X             X X               '),
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: repeat(3, 'X             X X               ') + 'X             X X.X.X..X.X..XXXX',
            ta: '@ls',
            ag: repeat(8, 'a a oo a a o oo '),
            sh: '@ls'
        },
        'Break 5': {
            ls: '              X X             X X     X X     X X   X   X   X   ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: 'X.X.X..X.X..X     X.X..X.X..X     X X     X X     X   X   X   X ',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls'
        },
        'Break 5 (Hardcore)': {
            ls: repeat(4, '              X X             X X     X X     X X   X   X   X   '),
            ms: repeat(2, '              XXX             XXX             XXX       XXXXXXXX') + repeat(2, 'X X X X X X X XXX X X X X X X XXX X X X X X X XXX X X X XXXXXXXX'),
            hs: '@ms',
            re: repeat(1, '              XXX             XXX             XXX       XXXXXXXX') + repeat(3, 'X X X X X X X XXX X X X X X X XXX X X X X X X XXX X X X XXXXXXXX'),
            sn: repeat(4, 'X.X.X..X.X..X     X.X..X.X..X     X X     X X     X   X   X   X '),
            ta: '@re',
            ag: repeat(3, 'o o o o o o o ooo o o o o o o ooo o o o o o o ooo o o o oooooooo') + repeat(1, 'a a a a a a a aaa a a a a a a aaa a a a a a a aaa a a a aaaaaaaa'),
            volumeHack: {
                ms: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                hs: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                re: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 },
                ta: { 66: .3, 78: 1, 82: .3, 94: 1, 98: .3, 110: 1, 114: .3, 120: 1, 130: .6, 142: 1, 146: .6, 158: 1, 162: .6, 174: 1, 178: .6, 184: 1 }
            }
        },
        'Tam Line': {
            ls: 'X X XX X X X XX ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls'
        }

    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune", "Tune", "Break 1", "Tune", "Tune", "Tune", "Tune", "Break 2", "Tune", "Tune", "Tune", "Tune", "Tam Line", "Tune", "Tune", "Tune", "Tune", "Break 3 Agogo", "Tune", "Tune", "Tune", "Tune", "Break 5"]
}
