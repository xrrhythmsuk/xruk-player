import { repeat } from "../../src/tuneHelper";

export default {
    categories: ["common", "onesurdo", "tricky"],
    sheet: require("./sambasso.pdf"),
    description: require("./sambasso.md").default,
    video: undefined,
    patterns: {
        Tune: {
            loop: true,
            ls: 'X  rX r X  rX r ',
            ms: '@ls',
            hs: '@ls',
            re: 'X..X..X..XX..XX.',
            sn: 'X..X..X...X..X..',
            ta: 'X X X   XX XX   ',
            ag: 'o  aa oo a oo a ',
            sh: 'X.X.X.X.X.X.X.X.',
            mnemonics: {
                ls: repeat(2, "Hump-ty Dump-ty "),
                re: "Hump . . ty's . . on . . the wall . . a-gain .",
                sn: "Bo . . ssa . . for . . . Hump . . ty . .",
                ta: "Hump-ty mate, get off the wall",
                ag: "Hump-ty Dump-ty fell off a brick wall"
            }
        },
        'Starter Snare': {
            loop: true,
            sn: '..XX..XX..XX..XX',
            sh: 'X   .   .   .   ',
            mnemonics: {  sn: ". . Got to . . Keep an . . Eye on . . Hump-ty" }
        },
        'Starter Agogo': {
            displayName: 'Starter Agogô',
            loop: true,
            ag: 'o  a  o   a a   ',
            sh: 'X   .   .   .   ',
            mnemonics: {  ag: "Cla-ve for Hump-ty" }
        },
        'Alt Tam': {
            loop: true,
            ta: ' X XX X XX XX  X X XXXX X  XX   ',
            sh: 'X   .   .   .   X   .   .   .   ',
            mnemonics: {  ta: "Hump-ty Dump-ty sat on the wall, which made his hae-mo-rrhoids worse and all" }
        },
        'Break 1': {
            ls: 'X  rX r XX XX   ',
            ms: '@ls',
            hs: '@ls',
            re: 'X..X..X.XX XX   ',
            sn: 'X..X..X.XX XX   ',
            ta: 'X X X   XX XX   ',
            ag: 'o  aa ooXX XX   ',
            sh: 'X.X.X.X.XX XX   ',
            ot: 'y w w           ',
            mnemonics: {
                ls: "Hump-ty Dump-ty Get off the wall",
                re: "Hump . . ty's . . on . Get off the wall",
                sn: "Bo . . ssa . . for . Get off the wall",
                ta: "Hump-ty mate, Get off the wall",
                ag: "Hump-ty Dump-ty fell Get off the wall",
                ot: "Hump-ty mate"
            }
        },
        'Break 2': {
            ls: repeat(4, 'X X X X X       '),
            ms: '@ls',
            hs: '@ls',
            re: repeat(4, '          XX XX '),
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: repeat(4, "Put that la-dder down "),
                re: repeat(4, "Get off the wall ")
            }
        },
        'Call Break (Intro)': {
            upbeat: 1,
            ls: repeat(4, '         XX XX  ') + '                     X X X X XX X    X X   X X   ' +\
                repeat(3, 'X                   X X X X XX X    X X   X X   ') + repeat(2, 'X  rX r X  rX r '),
            ms: '@ls',
            hs: '@ls',
            re: repeat(4, 'fX X X          ') + ' ' +\
                repeat(4, 'X..X..X..X..ffffX                               ') + repeat(8, '    '),
            sn: repeat(4, '         XX XX  ') + '                     X X X X XX X    X X   X X   ' +\
                repeat(3, 'X                   X X X X XX X    X X   X X   ') + repeat(8, '    '),
            ta: '@sn',
            ag: '@sn',
            sh: '@sn',
            mnemonics: {
                ls: repeat(4, "Get off the wall ") + repeat(4, "We're so sick of glu-ing his stu-pid shell back on ") +\
                    "-ty Dump-ty " + repeat(3, "Hump-ty Dump-ty "),
                re: repeat(4, "z Hump-ty mate ") + repeat(4, "I . . tried . . but . . he . . pro-mised he'd be fine "),
                sn: repeat(4, "Get off the wall ") + repeat(4, "We're so sick of glu-ing his stu-pid shell back on ")
            }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune", "Tune", "Break 1",
                  "Tune", "Tune", "Tune", "Tune", "Break 2", "Tune", "Tune", "Tune", "Tune", "Call Break (Intro)"]
}
