import { repeat } from "../../src/tuneHelper"
export default {
    displayName: "Afoxé",
    categories: ["common", "medium"],
    sheet: require("./afoxe.pdf"),
    description: require("./afoxe.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: 's   s   s   s   s   s   X   X   ',
            ms: '0     X 0     X 0     X X X X X ',
            hs: '@ms',
            re: 'f  hs r f  hs r f  hs r s r s r ',
            sn: 'X...X..XX..X....X...X..XX..X....',
            ta: 'X X X X XX XX X X X X X XX XX X ',
            ag: 'a a o o aa o oo a a o o aa o oo ',
            sh: '................................',
            mnemonics: {
                ls: "I'm so sick of all this stu-bble",
                ms: "If you want a shave then grab a to-wel",
                re: "Sha-ving cream please, Sha-ving cream please, Sha-ving cream please, Cream please cream please",
                sn: "Don't . . . scratch . . my face, . . please . . . . Don't . . . scratch . . my face, . . please . . . .",
                ta: "Spent all e-vening sha-ving my arm-pits Spent all e-vening sha-ving my arm-pits",
                ag: "Spent all e-vening sha-ving both my legs Spent all e-vening sha-ving both my legs"
            }
        },
        "Alt Repi": {
            loop: true,
            re: 'X X XX XXX X    ',
            sh: 'X   .   .   .   ',
            mnemonics: {  re: "It-chy stu-bble, there's no-thing worse"  }
        },
        "Break 1": {
            ls: 'X       X       X       X XXXXX ',
            ms: '@ls',
            hs: '@ls',
            re: '   XXXX    XXXX    XXXX X XXXXX ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: "Hey Hey Hey Looks like you've had a shave",
                re: "You've had a shave You've had a shave You've had a shave Looks like you've had a shave"
            }
        },
        "Tam Line": {
            upbeat: 16,
            ls: '                X X X X XX XX X ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            ot: 'w w w w ww ww w                 ',
            mnemonics: {
                ls: "Spent all e-vening sha-ving my arm-pits",
                ot: "Spent all e-vening sha-ving my arm-pits"
            }
        },
        "Short call": {
            displayName: 'Call Break (short)',
            ls: '        XX XX           XX XX           XX XX   X X X X XX XX X ',
            ms: '@ls',
            hs: '@ls',
            re: 'X X X           X X X           X X X           X X X X XX XX X ',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {
                ls: "We had some cream We had some cream We had some cream Spent all e-vening sha-ving my arm-pits",
                re: "Sha-ving cream? Sha-ving cream? Sha-ving cream? Spent all e-vening sha-ving my arm-pits"
            }
        },
        "Long call": {
            displayName: 'Call Break (long, one example)',
            ls: repeat(2, repeat(2, '                                ') + '        XX XX   ') + '        XX XX   '
                + repeat(2, '                                ') + repeat(3, '        XX XX   ')+ 'X X X X XX XX X ',
            ms: '@ls',
            hs: '@ls',
            re: repeat(2, repeat(2, 'f  hs r f  hs r f  hs r s r s r ') + 'X X X           ') + 'X X X           '
                + repeat(2, 'f  hs r f  hs r f  hs r s r s r ') + repeat(3, 'X X X           ')+ 'X X X X XX XX X ',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {
                ls: repeat(6, "We had some cream ") + "Spent all e-vening sha-ving my arm-pits",
                re: repeat(2, repeat(2, "Sha-ving cream please, Sha-ving cream please, Sha-ving cream please, Cream please cream please ")
                        + "Sha-ving cream? ") + "Sha-ving cream? "
                + repeat(2, "Sha-ving cream please, Sha-ving cream please, Sha-ving cream please, Cream please cream please ")
                        + repeat(3, "Sha-ving cream? ")+ "Spent all e-vening sha-ving my arm-pits"
            }
        },
        "Break 2": {
            ls: '      X       X       X   XXXXX ',
            ms: '@ls',
            hs: '@ls',
            sh: 'X   .   .   .   X   .   .   .   ',
            mnemonics: {  ls: "Hey Hey Hey Have you had a shave?" }
        },
        "Break 3": {
            ls: '   XXXX    XXXX    XXXX X XXXXX ',
            ms: '@ls',
            hs: '@ls',
            sh: 'X   .   .   .   X   .   .   .   ',
            mnemonics: {  ls: "You've had a shave You've had a shave You've had a shave Looks like you've had a shave" }
        },
        "Tune Break 2": {
            displayName: "Tune (Surdos Break 2)",
            ls: '      X       X       X   XXXXX ',
            ms: '@ls',
            hs: '@ls',
            re: 'f  hs r f  hs r f  hs r s r s r ',
            sn: 'X...X..XX..X....X...X..XX..X....',
            ta: 'X X X X XX XX X X X X X XX XX X ',
            ag: 'a a o o aa o oo a a o o aa o oo ',
            sh: '................................'
        },
        "Tune Break 3": {
            displayName: "Tune (Surdos Break 3)",
            ls: '   XXXX    XXXX    XXXX X XXXXX ',
            ms: '@ls',
            hs: '@ls',
            re: 'f  hs r f  hs r f  hs r s r s r ',
            sn: 'X...X..XX..X....X...X..XX..X....',
            ta: 'X X X X XX XX X X X X X XX XX X ',
            ag: 'a a o o aa o oo a a o o aa o oo ',
            sh: '................................'
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Break 1", "Tune", "Tune", "Tam Line", "Tune", "Tune", "Long call", "Tune", "Tune", "Tune Break 2", "Tune", "Tune", "Tune Break 3"]
}
