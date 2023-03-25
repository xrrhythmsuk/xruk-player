export default {
    categories: ["new", "medium"],
    sheet: require("./drum-bass.pdf"),
    displayName: "Drum & Bass",
    description: require("./drum-bass.md").default,
    video: "https://tube.rhythms-of-resistance.org/videos/embed/f5331b5e-5de7-41e9-af0f-813f874bb074",
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
            sh: '................................................................'
        },
        "   Low Surdo": {
            loop: true,
            ls: 'X         X  X  X         X     ',
            sh: 'X   .   .   .   X   .   .   .   '
        },
        "   Mid/High Surdo": {
            loop: true,
            ms: '    X XXXX  X       X XXXX  X   ',
            hs: '@ms',
            sh: 'X   .   .   .   X   .   .   .   '
        },
        "   Repi": {
            loop: true,
            re: '    X  X X XX XX    X       X   ',
            sh: 'X   .   .   .   X   .   .   .   '
        },
        "   Snare": {
            loop: true,
            sn: '....X..X....X.......X..X....X   ....X..X....X...X.X.X.X.X.X.X.X.',
            sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   '
        },
        "   Tam": {
            loop: true,
            ta: '    X     X X       X   X X X   ',
            sh: 'X   .   .   .   X   .   .   .   '
        },
        "   Agogo": {
            displayName: '   Agogô',
            loop: true,
            ag: 'o ao ao a       ',
            sh: 'X   .   .   .   '
        },
        'Break 2': {
            ls: 'X  X X  X  X X  X  X X          ',
            ms: '@ls',
            hs: '@ls',
            re: '  X   X   X   X   X   X XXXX    ',
            sn: '@re',
            ta: '  X   X   X   X   X   X         ',
            ag: '@ta',
            sh: '@ta'
        },
        'Call Break': {
            ls: 'X  X     X X    X  X   X X X  X X  X     X X                    X  X     X X    X  X   X X X  X X  X     X X                    ',
            ms: '@ls',
            hs: '@ls',
            re: '    X       X       X       X       X       X   Xr Xr Xr Xr XXrr    X       X       X       X       X       X                   ',
            sn: '    X       X       X       X       X       X                       X       X       X       X       X       X     X   X   X   X ',
            ta: '    X       X       X       X       X       X                       X       X       X       X       X       X                   ',
            ag: '@ta',
            sh: '@ta'
        }
    },
    exampleSong: ["Tune", "Break 2", "Tune", "Call Break", "Tune"]
}
