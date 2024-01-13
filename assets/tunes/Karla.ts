export default {
    categories: ["core", "easy"],
    sheet: require("./karla.pdf"),
    description: require("./karla-shnikov.md").default,
    video: undefined,
    patterns: {
        Tune: {
            loop: true,
            ls: 'X     XX        X     XX        X     XX        X     XX X XX X ',
            ms: '    X       X       X       X       X       X       X  X X XX X ',
            hs: '@ms',
            re: 'X  XX  X X XX X X  XX  X X XX X X  XX  X X XX X X  XX  X X XX X ',
            sn: '....X.......X.......X.......X.......X.......X.......X.......X...',
            ta: '    X       X       X  X X XX       X       X       X  X X XX   ',
            ag: 'o  oa o o  oa o o  oa o o  oa o o  oa o o  oa o o  oa o o  oa o ',
            sh: '................................................................',
            mnemonics: {
                ls: "Ra-bbit run Ra-bbit run Ra-bbit run Ra-bbit run from the ca-ges",
                ms: "Run fast Run fast Run fast Run fast from the ca-ges",
                re: "Ka-rla said you won't be fur coats Ka-rla said you won't be fur coats "
                    + "Ka-rla said you won't be fur coats Ka-rla said you won't be fur coats",
                ta: "Ka-rla saved us from the farm Ka-rla saved us from the farm",
                ag: "Ha-ppy bu-nnies ha-ppy bu-nnies Ha-ppy bu-nnies ha-ppy bu-nnies "
                    + "Ha-ppy bu-nnies ha-ppy bu-nnies Ha-ppy bu-nnies ha-ppy bu-nnies"
            }
        },
        'Karla Break (Karla)': {
            ls: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX               ',
            ms: '@ls',
            hs: '@ls',
            re: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  XX  X X XX X ',
            sn: '@ls',
            ta: "X X X X X X X X X X X X X X X X X X X X X X X X X",
            ag: "o o o o o o o o o o o o o o o o o o o o o o o o o",
            volumeHack: { 0: .2, 16: .4, 32: .7, 48: 1 }
        },            
        'Break 2': {
            ls: 'XXXXXXXXXXXXXXXXX   X   X   X   X X    X X      X X    X X      ',
            ms: '@ls',
            hs: '@ls',
            re: 'XXXXXXXXXXXXXXXXX   X   X   X       X      XXXX     X      XXXX ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: "A-ny-bo-dy a-ny-bo-dy a-ny-bo-dy a-ny-bo-dy Got some le-ttuce? I have I have I have I have",
                re: "A-ny-bo-dy a-ny-bo-dy a-ny-bo-dy a-ny-bo-dy Got some le-ttuce? Great We're star-ving here Great We're star-ving here"
            }
        },
        'Break 2 Inverted': {
            ls: 'XXXXXXXXXXXXXXXXX   X   X   X   X X    X X      X X    X X      X X    X X      X X    X X      X   X   X   X   XXXXXXXXXXXXXXXX',
            ms: '@ls',
            hs: '@ls',
            re: 'XXXXXXXXXXXXXXXXX   X   X   X       X      XXXX     X      XXXX     X      XXXX     X      XXXX X   X   X   X   XXXXXXXXXXXXXXXX',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: "A-ny-bo-dy a-ny-bo-dy a-ny-bo-dy a-ny-bo-dy Got some le-ttuce? I have I have I have I have "
                    + "I have I have I have I have Got some le-ttuce A-ny-bo-dy a-ny-bo-dy a-ny-bo-dy a-ny-bo-dy?",
                re: "A-ny-bo-dy a-ny-bo-dy a-ny-bo-dy a-ny-bo-dy Got some le-ttuce? Great We're star-ving here Great We're star-ving here "
                    + "Great We're star-ving here Great We're star-ving here Got some le-ttuce A-ny-bo-dy a-ny-bo-dy a-ny-bo-dy a-ny-bo-dy?"
            }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Karla Break (Karla)", "Tune", "Break 2", "Tune", "Break 2 Inverted", "Tune"]
}
