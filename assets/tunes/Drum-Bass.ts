export default {
    categories: ["new", "medium"],
    sheet: require("./drum-bass.pdf"),
    displayName: "Drum & Bass",
    description: require("./drum-bass.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: 'X         X  X  X         X     X         X  X  X         X     ',
            ms: '    X XXXX  X       X XXXX  X       X XXXX  X       X XXXX  X   ',
            hs: '@ms',
            re: '    X  X X XX XX    X       X       X  X X XX XX    X       X   ',
            sn: '....X..X....X.......X..X....X   ....X..X....X...X.X.X.X.X.X.X.X.',
            ta: '    X     X X       X   X X X       X     X X       X   X X X   ',
            ag: 'o ao ao a       o ao ao a       o ao ao a       o ao ao a       ',
            sh: '................................................................',
            mnemonics: {
                ls: "Drum, drum and bass, bass Up in your face, face",
                ms: "Dance, yeah I love it, dance Dance, yeah I love it, dance Dance, yeah I love it, dance Dance, yeah I love it, dance",
                re: "This M-C can rock the mic, Mic drop This M-C can rock the mic, Mic drop",
                sn: ". . . . Drum . . and . . . . bass . . . . . . . Drum . . and . . . . stop "
                    + ". . . . Drum . . and . . . . bass . . . This . goes . out . to . all . the . D . Js .",
                ta: "The D-J plays bang-in' tunes The D-J plays bang-in' tunes",
                ag: "Drum and bass is so cool Drum and bass is so cool Drum and bass is so cool Drum and bass is so cool"
            }
        },
        'Break 2': {
            ls: 'X  X X  X  X X  X  X X          ',
            ms: '@ls',
            hs: '@ls',
            re: '  X   X   X   X   X   X XXXX    ',
            sn: '@re',
            ta: '  X   X   X   X   X   X         ',
            ag: '@ta',
            sh: '@ta',
            mnemonics: {
                ls: "Get drum and Get drum and Get drum and",
                re: "some bass some bass some bass Right in your face",
                ta: "some bass some bass seom bass"
            }
        },
        'Call Break': {
            ls: 'X  X     X X    X  X   X X X  X X  X     X X                    X  X     X X    X  X   X X X  X X  X     X X                    ',
            ms: '@ls',
            hs: '@ls',
            re: '    X       X       X       X       X       X   Xr Xr Xr Xr XXrr    X       X       X       X       X       X                   ',
            sn: '    X       X       X       X       X       X                       X       X       X       X       X       X     X   X   X   X ',
            ta: '    X       X       X       X       X       X                       X       X       X       X       X       X                   ',
            ag: '@ta',
            sh: '@ta',
            mnemonics: {
                ls: "Where's the Bring the Where's the We want the yeah Where's the Bring the "
                + "Where's the Bring the Where's the We want the yeah Where's the Bring the",
                re: "drop drop drop drop drop drop C'-mon c'-mon c'-mon c'-mon Give it to us drop drop drop drop drop drop",
                sn: "drop drop drop drop drop drop drop drop drop drop drop drop Here it comes now",
                ta: "drop drop drop drop drop drop drop drop drop drop drop drop"
            }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Break 2", "Tune", "Call Break", "Tune"]
}
