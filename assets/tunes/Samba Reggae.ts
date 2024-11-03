import { repeat, stretch } from "../../src/tuneHelper";

export default {
    categories: ["core", "medium"],
    sheet: require("./samba-reggae.pdf"),
    description: require("./samba-reggae.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: '0   X   0   X X ',
            ms: 'X   0   X   0   ',
            hs: '0     X 0   XXXX',
            re: '  XX  XX  XX  XX',
            sn: 'X..X..X...X..X..',
            ta: 'X  X  X   X X   ',
            ag: 'o a a oo a aa o ',
            sh: '................',
            mnemonics: {
                ls: "I quite like re-ggae",
                ms: "Sam-ba re-ggae",
                hs: "Time to play sam-ba re-ggae",
                re: "Can I Get a Bit of Re-ggae",
                sn: "Bo . . ssa . . for . . . re . . ggae . .",
                ta: "Cla-ve for re-ggae",
                ag: "Sam-ba re-ggae on the a-go-gô"
            }
        },
        'Starter Snare': {
            loop: true,
            sn: '..XX..XX..XX..XX',
            sh: 'X   .   .   .   ',
            mnemonics: {  sn: ". . Can I . . Get a . . Bit of . . Re-ggae" }
        },
        'Starter Agogo': {
            displayName: 'Starter Agogô',
            loop: true,
            ag: 'o  a  o   a a   ',
            sh: 'X   .   .   .   ',
            mnemonics: {  ag: "Cla-ve for re-ggae" }
        },
        'Break 1': {
            ls: '                X X XX XX                       X  X  X X                                  XX                              XX                              XX               XXXX',
            ms: '@ls',
            hs: '@ls',
            re: 'XX XX XXXX XX                   XX XX XXXX XX                                              XX                              XX                              XX               XXXX',
            sn: '                X X XX XX                       X  X  X X       X..X..X.X..X..X.X..X..X.X       X..X..X.X..X..X.X..X..X.X       X..X..X.X..X..X.X..X..X.X       X  X  X   X     ',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {
                ls: "We want some-thing to eat We want some grub Yum yum Yum yum Yum yum Sam-ba re-ggae",
                re: repeat(2, "What do you want, tell me what do you want? ") + "Yum yum Yum yum Yum yum Sam-ba re-ggae",
                sn: "We want some-thing to eat We want some grub "
                    + repeat(3, repeat(2, "Sau-sa-ges sau-sa-ges I've got ") + "Sau-sa-ges sau-sa-ges in the pan ") + "Sam-ba re-ggae"
            }
        },
        'Break 2': {
            ls: '            XXXX            XXXX            XXXX            XXXX',
            ms: '@ls',
            hs: '@ls',
            re: 'X  X  X   X X   X  X  X   X X   X  X  X   X X   X  X  X   X X   ',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {
                ls: repeat(4, "Sam-ba re-ggae "),
                re: repeat(4, "Sam-ba re-ggae Sa ")
            }
        },
        'Whistle Break': {
            loop: true,
            time: 6,
            ls: "X    XX    XX X  XX     ",
            ms: "@ls",
            hs: "@ls",
            re: "   X     X     X     X  ",
            sn: "@re",
            ta: "@re",
            ag: "@re",
            sh: "@re",
            mnemonics: {
                ls: "Time to do the Sheff whi-stle break",
                re: "Yep Yep Yep Yep"
            }
        },
        'Tune (Whistle in Whistle Break)': {
            time: 12,
            ls: repeat(2, stretch(4, 12, '0   X   0   X X ')),
            ms: repeat(2, stretch(4, 12, 'X   0   X   0   ')),
            hs: repeat(2, stretch(4, 12, '0     X 0   XXXX')),
            re: repeat(2, stretch(4, 12, '  XX  XX  XX  XX')),
            sn: repeat(2, stretch(4, 12, 'X..X..X...X..X..')),
            ta: repeat(2, stretch(4, 12, 'X  X  X   X X   ')),
            ag: repeat(2, stretch(4, 12, 'o a a oo a aa o ')),
            sh: repeat(2, stretch(4, 12, '................')),
            ot: repeat(2, stretch(6, 12, "w    ww    ww w  ww     "))
        },
        'Break 3': {
            ls: '                X  XX X XX XX X                 X  XX X XX XX X                 X  XX X X       X  XX X X       X  X  X         ',
            ms: '@ls',
            hs: '@ls',
            re: '                                X  X  X   X                     X  X  X   X              fX X X          fX X X             XXXX',
            sn: 'X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...X...',
            ta: '                                X  X  X   X                     X  X  X   X                 X X             X X             XXXX',
            ag: '                                X  X  X   X                     X  X  X   X                 a a             a a             aaaa',
            sh: '                                X  X  X   X                     X  X  X   X                                                 XXXX',
            mnemonics: {
                ls: repeat(2, "Do you want to play sam-ba re-ggae? ") + repeat(2, "Do you want to play? ") + "Right let's play",
                re: repeat(2, "Sam-ba re-ggae ") + repeat(2, "z We want to ") + "Sam-ba re-ggae",
                ta: repeat(2, "Sam-ba re-ggae ") + repeat(2, "want to ") + "Sam-ba re-ggae",
                ag: repeat(2, "Sam-ba re-ggae ") + repeat(2, "want to ") + "Sam-ba re-ggae"
            }
        },
        'Circle Break': {
            ls: repeat(3, '          X X   ') + repeat(4, '    ') + repeat(3, 'X  X  X   X X   ') + 'X  X  X   X X X ',
            ms: '@ls',
            hs: '@ls',
            re: repeat(3, 'f XX XX X       ') + repeat(5, 'X  X  X   X X   '),
            sn: repeat(3, '          X X   ') + repeat(4, '    ') + repeat(4, 'X..X..X...X.X...'),
            ta: repeat(3, '          X X   ') + repeat(4, '    ') + repeat(4, 'X  X  X   X X   '),
            ag: '@ta',
            sh: '@ta',
            volumeHack: {  64: .2, 80: .4, 96: .7, 112: 1  },
            mnemonics: {
                ls: repeat(3, "Act now ") + repeat(4, "Shut the sy-stem down ") + "Yeah",
                re: repeat(3, "There's no time to waste so ") + repeat(5, "Shut the sy-stem down "),
                sn: repeat(3, "Act now ") + repeat(4, "Shut . . the . . sy . . . stem . down . . . "),
                ta: repeat(3, "Act now ") + repeat(4, "Shut the sy-stem down ")
            }
        },
        'Circle Break Reggae Samba': {
            displayName: 'Circle Break (for Reggae Samba)',
            time: 3,
            ls: repeat(3, '               X  X     ') + repeat(4, '      ') + repeat(3, 'X    X   X     X  X     ') + 'X    X   X     X  X  X  ',
            ms: '@ls',
            hs: '@ls',
            re: repeat(3, 'f  X X  XX  X           ') + repeat(5, 'X    X   X     X  X     '),
            sn: repeat(3, '               X  X     ') + repeat(4, '      ') + repeat(4, 'X .. X. .X .. .X .X .. .'),
            ta: repeat(3, '               X  X     ') + repeat(4, '      ') + repeat(4, 'X    X   X     X  X     '),
            ag: '@ta',
            sh: '@ta',
            volumeHack: {  96: .2, 120: .4, 144: .7, 168: 1  }
        },
        'Tune Reggae Samba': {
            displayName: 'Tune (Reggae Samba)',
            time: 3,
            loop: true,
            ls: '0     X     0     X  X  ',
            ms: 'X     0     X     0     ',
            hs: '0        X  0     X XX X',
            re: '   X X   X X   X X   X X',
            sn: 'X .. X. .X .. .X .. X. .',
            ta: 'X    X   X     X  X     ',
            ag: 'o  a  a  o o  a  aa  o  ',
            sh: '. .. .. .. .. .. .. .. .'
        },
        'SOS Break': {
            ls: 'X       X       X       X       X       X       X       X     X ',
            ms: '@ls',
            hs: '@ls',
            re: '  XX XX   X X     XX XX   X X     XX XX   X X     XX XX   X X   ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: repeat(4, "Act Now ") + "Yeah",
                re: repeat(4, "No time to waste Act now ")
            }
        },
        'Tune SOS Repi': {
            displayName: 'Tune (SOS Repi)',
            loop: true,
            ls: '0   X   0   X X ',
            ms: 'X   0   X   0   ',
            hs: '0     X 0   XXXX',
            re: '  XX XX   X X   ',
            sn: 'X..X..X...X..X..',
            ta: 'X  X  X   X X   ',
            ag: 'o a a oo a aa o ',
            sh: '................'
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune", "Tune", "Break 2", "Tune", "Tune", "Tune", "Tune", "Break 1", "Tune", "Tune", "Tune (Whistle in Whistle Break)", "Whistle Break", "Whistle Break", { tuneName: "Core Breaks", patternName: "Clave" }, "Tune", "Tune", "Tune", "Tune", "Break 3", "Tune", "Tune", "Tune", "Tune", "Circle Break Reggae Samba", "Tune Reggae Samba", "Tune Reggae Samba", "Tune Reggae Samba", "Tune Reggae Samba", "Circle Break", "Tune", "Tune", "Tune", "Tune", "SOS Break", "Tune SOS Repi", "Tune SOS Repi", "Tune SOS Repi", "Tune SOS Repi"]
}
