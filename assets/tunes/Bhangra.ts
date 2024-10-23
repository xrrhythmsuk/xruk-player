export default {
    categories: ["core", "onesurdo", "medium"],
    speed: 120,
    time: 3,
    sheet: require("./bhangra.pdf"),
    description: require("./bhangra.md").default,
    video: undefined,
    patterns: {
        Tune: {
            loop: true,
            ls: 'X       XX  X       XX  X       XX  X    X   X  ',
            ms: '@ls',
            hs: '@ls',
            re: 'X zX zX zX zX zX zX zX zX zX zX zX zXXXX  XXXX  ',
            sn: 'X..X..X..X..X..X..X..X..X..X..X..X..XXXX  XXXX',
            ta: 'X XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX X',
            ag: 'aaaa  oooo              aaaa  oooo              ',
            sh: 'X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..',
            mnemonics: {
                ls: "Swing your drum Swing your drum Swing your drum side to side",
                re: "Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Danc-ing a lot, like it or not",
                sn: "1 . . 2 . . 3 . . 4 . . 1 . . 2 . . 3 . . 4 . . 1 . . 2 . . 3 . . 4 . . Dan-cing a lot, like it or not",
                ta: "Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger",
                ag: "Dan-cing a lot, like it or not Dan-cing a lot, like it or not"
            }
        },
        'Break 1': {
            upbeat: 4,
            ls: 'XX  X XX X  XX  X       XX  X XX X  XX  X       XX  X XX X  XX  X       XX  X    X   X  XXXX  XXXX  ',
            ms: '@ls',
            hs: '@ls',
            re: '                   X  X                    X  X                    X  X                 XXXX  XXXX  ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: "'Cos the swing on this beat is so cool You'll be dan-cing a-round like a fool 'Cos the swing on this beat is so cool 'Cos it's a ban-ger Dan-cing a lot, like it or not",
                re: "That's right That's right That's right Dan-cing a lot, like it or not"
            }
        },
        "Break 3": {
            ls: "XXXX  XXXX  ",
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {  ls: "Dan-cing a lot, like it or not" }
        },
        '7 Break': {
            ls: "XXXXXXX",
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls",
            sh: "@ls",
            ot: "         A  ",
            mnemonics: {
                ls: "This is my fa-vou-rite part",
                ot: "Hey!"
            }
        },
        'Butterfly Break': {
            ls: "XXXXXXX     XXXXXXX     XXXXXXXXXX  XXXXXXX",
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls",
            sh: "@ls",
            ot: "                                             A  ",
            mnemonics: {
                ls: "Bi-bbi-di bo-bbi-di boo Bi-bbi-di bo-bbi-di boo Put it to-ge-ther and what have you got? Bi-bbi-di bo-bbi-di boo",
                ot: "Hey!"
            }
        },
        "Call Break": {
            ls: '            XXXXXXXXXX              XXXXXXXXXX        XXXX              X XX XX XX  XXXXXXX     ',
            ms: '@ls',
            hs: '@ls',
            re: 'XXXXXXXXXX              XXXXXXXXXX              XXXX        XXXXXXXXXX              XXXXXXX     ',
            sn: '            XXXXXXXXXX              XXXXXXXXXX        XXXX                          XXXXXXX     ',
            ta: '@sn',
            ag: '@sn',
            sh: '@sn',
            ot: '                                                                                             A  ',
            mnemonics: {
                ls: "This is my fa-vou-rite, fa-vou-rite part This is my fa-vou-rite, fa-vou-rite part This is the part "
                    + "Ban-ger ban-ger ban-ger bang This is my fa-vou-rite part",
                re: "This is my fa-vou-rite, fa-vou-rite part This is my fa-vou-rite, fa-vou-rite part This is the part "
                    + "This is my fa-vou-rite, fa-vou-rite part This is my fa-vou-rite part",
                sn: "This is my fa-vou-rite, fa-vou-rite part This is my fa-vou-rite, fa-vou-rite part This is the part "
                    + "This is my fa-vou-rite part",
                ot: "Hey!"
            }
        },
        'Break 2': {
            upbeat: 4,
            ls: 'XX  X XX  X XX  X       XX    X  XX  X  X       XX  X XX  X XX  X       XX    X  XX  X  XXXX  XXXX  ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {
                ls: "They'll say play that song, play that song now They'll say, Play that song right now "
                    + "They'll say play that song, play that song now They'll say, Play that song we're "
                    + "Dan-cing a lot, like it or not"
            }
        },
        "Karla Break (Bhangra)": {
            ls: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX           ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: 'X XX XX XX XX XX XX XX XX XX XX XX XX',
            ag: '@ta',
            sh: '@ls',
            volumeHack: { 0: .1, 12: .4, 24: .7, 36: 1 }
        },
        'Progressive Karla (Bhangra)': {
            ls: 'X  X  X  X  X XX XX XX XXXXXXXXXXXXXX           ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: 'X  X  X  X  X XX XX XX XX XX XX XX XX           ',
            ag: '@ta',
            sh: '@ls'
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Break 1", "Tune", "Tune", "Break 3", "Tune", "Tune", "7 Break", "Tune", "Tune", "Butterfly Break",
                  "Tune", "Tune", "Call Break", "Tune", "Tune", "Progressive Karla (Bhangra)", "Tune", "Tune", "Break 2"]
}
