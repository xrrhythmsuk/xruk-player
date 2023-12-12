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
            time: 12,
            ls: "X         X X         X X   X     X X",
            ms: "@ls",
            hs: "@ls",
            re: "      X           X           X           X  ",
            sn: "@re",
            ta: "@re",
            ag: "@re",
            mnemonics: {
                ls: "Time to do the Sheff whi-stle break",
                re: "Yep Yep Yep Yep"
            }
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
        'Call Break': {
            ls: '          X X             X X             X X                                                                 X ',
            ms: '          X X             X X             X X                                                                   ',
            hs: '@ms',
            re: 'f XX XX X       f XX XX X       f XX XX X                                                                       ',
            sn: '          X X             X X             X X                   X..X..X...X.X...X..X..X...X.X...X..X..X...X.X...',
            ta: '          X X             X X             X X   X  X  X   X X   X  X  X   X X   X  X  X   X X   X  X  X   X X   ',
            ag: '@ms',
            sh: '@ms',
            mnemonics: {
                ls: repeat(3, "Act now ") + ".",
                ms: repeat(3, "Act now "),
                re: repeat(3, "There's no time to waste so "),
                sn: repeat(3, "Act now ") + repeat(3, "Shut . . the . . sy . . . stem . down . . . "),
                ta: repeat(3, "Act now ") + repeat(4, "Shut the sy-stem down ")
            }
        },
        'SOS Break': {
            ls: 'X       X       X       X       X       X       X       X     X ',
            ms: 'X       X       X       X       X       X       X       X       ',
            hs: '@ms',
            re: '  XX XX   X X     XX XX   X X     XX XX   X X     XX XX   X X   ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: repeat(4, "Act Now ") + ".",
                ms: repeat(4, "Act Now "),
                re: repeat(4, "No time to waste Act now ")
            }
        },
        'Tune (SOS Repi)': {
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
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune", "Tune", "Break 2", "Tune", "Tune", "Tune", "Tune", "Break 1", "Tune", "Tune", "Tune", "Tune", "Whistle Break", "Whistle Break", "Tune", "Tune", "Tune", "Tune", "Break 3", "Tune", "Tune", "Tune", "Tune", "Call Break", "Tune", "Tune", "Tune", "Tune", "SOS Break", "Tune (SOS Repi)", "Tune (SOS Repi)", "Tune (SOS Repi)", "Tune (SOS Repi)"]
}
