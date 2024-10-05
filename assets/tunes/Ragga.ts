import { repeat } from "../../src/tuneHelper";

export default {
    categories: ["new", "tricky"],
    sheet: require("./ragga.pdf"),
    description: require("./ragga.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: repeat(4, 'X  X  0 '),
            ms: repeat(4, '0  X  X '),
            hs: '@ms',
            re: repeat(3, '  X   X ') + ' XXX  X ',
            sn: repeat(4, '..XX..X.'),
            ta: repeat(3, '  X   X ') + '  XX  X ',
            ag: 'o a o a oa ao a o a  o oo a o   ',
            sh: repeat(4, 'X.X.X.X.'),
            mnemonics: {
                ls: repeat(4, "Ra-gga yeah "),
                ms: repeat(4, "It's ra-gga "),
                re: repeat(3, "Ra-gga ") + "So turn it up",
                sn: repeat(4, ". . Turn it . . up . "),
                ta: repeat(3, "Ra-gga ") + "Turn it up",
                ag: "What's that pla-ying down at the dance-hall? Ra-gga? Be-tter play it loud"
            }
        },
        'Starter Agogo': {
            displayName: 'Starter Agogô',
            loop: true,
            ag: 'o a o a o ao ao ',
            sh: 'X   .   .   .   ',
            mnemonics: {  ag: '1 2 3 4 Put some ra-gga on'}
        },
        'Kickback 1': {
            loop: true,
            ls: 'X  X    X  X    ',
            ms: '@ls',
            hs: '@ls',
            re: '      X       X ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: "Wait for Wait for",
                re: "it it"
            }
        },
        'Kickback 2': {
            loop: true,
            ls: 'X  X X  X  X X  ',
            ms: '@ls',
            hs: '@ls',
            re: '  X   X   X   X ',
            sn: '@re',
            ta: '@re',
            // ag: '################',
            sh: '@re',
            mnemonics: {
                ls: "It's kick-back It's kick-back",
                re: "a rave a rave"
            }
        },
        'Break 1': {
            ls: '        X  X  X',
            ms: '@ls',
            hs: '@ls',
            re: '          X  X ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            ot: 'w w w w        ',
            mnemonics: {
                ls: 'Put ra-on',
                re: 'some gga',
                ot: '1 2 3 4'
            }
        },
        'Break 2': {
            ls: 'X           XXX ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            ot: '  2 3 4 5 6     ',
            mnemonics: {
                ls: 'Hey se-ven eight',
                ot: '2 3 4 5 6'
            }
        },
        'Break 3': {
            ls: 'X  X  X         ',
            ms: '@ls',
            hs: '@ls',
            re: '        X  X  X ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: '3 2 1',
                re: '3 2 1'
            }
        },
        'Zorro Break': {
            loop: true,
            ls: 'X       X       X       X  X  X ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@re',
            sh: '@re',
            mnemonics: {  ls: "Ha, take that Zo-rro break" }
        },
        'Tune Surdos Zorro': {
            displayName: 'Tune (Surdos Zorro Break)',
            loop: true,
            ls: 'X       X       X       X  X  X ',
            ms: '@ls',
            hs: '@ls',
            re: repeat(3, '  X   X ') + ' XXX  X ',
            sn: repeat(4, '..XX..X.'),
            ta: repeat(3, '  X   X ') + '  XX  X ',
            ag: 'o a o a oa ao a o a  o oo a o   ',
            sh: repeat(4, 'X.X.X.X.'),
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Kickback 1", "Kickback 1", "Kickback 1", "Kickback 1", "Kickback 2", "Kickback 2", "Kickback 2", "Kickback 2", "Break 2", "Tune", "Tune", "Break 1", "Tune", "Tune", "Break 2", "Tune", "Tune", "Break 3", "Tune", "Tune", "Tune Surdos Zorro", "Tune Surdos Zorro", "Zorro Break", "Zorro Break", "Break 1" ]
}
