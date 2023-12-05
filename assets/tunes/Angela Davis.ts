export default {
    categories: ["common", "medium"],
    sheet: require("./angela-davis.pdf"),
    description: require("./angela-davis.md").default,
    video: undefined,
    patterns: {
        Tune: {
            loop: true,
            ls: 'X X r  rXrX r   ',
            ms: 'XXXXXXXXX       ',
            hs: '            XXXX',
            re: 'f   f   f  XXX  ',
            sn: '....X.......X...',
            ta: 'X   X  XXX  X   ',
            ag: '  o a   oa  a   ',
            sh: '................'
        },
        'Break 1': {
            upbeat: 1,
            ls: 'XX X X X X X X X ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: { 
                ls: "The nuts stay in the ground all win-ter"
            }
        },
        'Break 2': {
            ls: 'X             X X             X X              XX X X X X X X X ',
            ms: '@ls',
            hs: '@ls',
            re: '  XXX XX XX X     XXX XX XX X     XXX XX XX X  XX X X X X X X X ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: { 
                ls: "Yes. They do. They do. The nuts stay in the ground all win-ter",
                re: "Squir-rels hide their nuts in the ground Squir-rels hide their nuts in the ground Squir-rels hide their nuts in the ground The nuts stay in the ground all win-ter"
            }
        },
        'Break 3': {
            loop: true,
            ls: 'X     XXXX      X X X  X        X     XXXX        X  X  X      XX X X X X X X X ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '....X.......X.......X.......X.......X.......X.......X.......X.......X.......X...',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: { 
                ls: "Hey! I'm a squir-rel I just climb trees. Hey I'm a squir-rel. Pea-nuts please. The nuts stay in the ground all win-ter"
            }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune", "Tune", "Break 1", "Tune", "Tune", "Tune", "Tune", "Break 2", "Tune", "Tune", "Tune", "Tune", "Break 3", "Break 3", "Tune", "Tune", "Tune", "Tune"]
}
