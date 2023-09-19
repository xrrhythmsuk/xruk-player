export default {
    categories: ["core", "easy"],
    sheet: require("./hedgehog.pdf"),
    description: require("./hedgehog.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: 's  X    s  X    s  X    X X X X ',
            ms: '      XX      XX      XX      XX',
            hs: '   X  X    X  X    X  X   X   X ',
            re: 'r  X  X r  X  X r  X  X r X r X ',
            sn: 'X..X..X.X..X..X.X..X..X.X...X...',
            ta: 'X  X    X  X    X  X    X X X   ',
            ag: 'o  a  a o  a  a o  a  a o a o a ',
            sh: '................................'
        },
       'Alt Repi': {
            loop: true,
            re: '  XX XXX  XX XXX  XX XXX  XX  XX',
            sh: 'X   .   .   .   X   .   .   .   '
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", {tuneName: "Core Breaks", patternName: "A Break"}, "Tune", "Tune"]
}
