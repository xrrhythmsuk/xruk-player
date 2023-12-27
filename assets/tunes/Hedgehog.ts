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
            sh: '................................',
            mnemonics: {
                ls: "Hedge-hog Hedge-hog Hedge-hog I'm a hedge-hog",
                ms: "I'm a hedge-hog I'm a hedge-hog",
                hs: "Hedge-hog Hedge-hog Hedge-hog A hog",
                re: "1 hedge-hog, 2 hedge-hog, 3 hedge-hog I'm a hedge-hog",
                sn: "Hedge . . hog . . a . Hedge . . hog . . a . Hedge . . hog . . a . Small . . . guy . . .",
                ta: "Hedge-hog Hedge-hog Hedge-hog I'm a hog",
                ag: "1 hedge-hog, 2 hedge-hog, 3 hedge-hog I'm a hedge-hog"
            }
        },
       'Alt Repi': {
           loop: true,
           re: '  XX XXX  XX XXX  XX XXX  XX  XX',
           sh: 'X   .   .   .   X   .   .   .   ',
           mnemonics: {  re: "A ti-ny li-ttle A ti-ny li-ttle A ti-ny li-ttle Hedge-hog Hedge-hog" }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", {tuneName: "Core Breaks", patternName: "A Break"}, "Tune", "Tune"]
}
