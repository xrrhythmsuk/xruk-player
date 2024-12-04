export default {
    categories: ["common", "medium"],
    sheet: require("./angela-davis.pdf"),
    description: require("./angela-davis.md").default,
    video: "https://www.youtube.com/embed/VQBvrEJkiWk",
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
            sh: '................',
            mnemonics: {
                ls: "Did a squi-rrel ask you for nuts?",
                ms: "I thought squi-rrels went for a-corns more",
                hs: "We like pea-nuts",
                re: "Pea-nuts for a squi-rrel",
                ta: "Who gives a squi-rrel nuts?",
                ag: "Oh my, squi-rrels fly?"
            }
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
                ls: "So give a pea-nut to a squi-rrel"
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
                ls: "Yes They do They do So give a pea-nut to a squi-rrel",
                re: "Squir-rels hide their nuts in the ground Squir-rels hide their nuts in the ground Squir-rels hide their nuts in the ground So give a pea-nut to a squi-rrel"
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
                ls: "Hey I'm a squir-rel I just climb trees Hey I'm a squir-rel Pea-nuts please So give a pea-nut to a squi-rrel"
            }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune", "Tune", "Break 1", "Tune", "Tune", "Tune", "Tune", "Break 2", "Tune", "Tune", "Tune", "Tune", "Break 3", "Break 3", "Tune", "Tune", "Tune", "Tune"]
}
