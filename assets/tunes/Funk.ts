export default {
    categories: ["core", "easy"],
    sheet: require("./funk.pdf"),
    description: require("./funk.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: 'X  X  X X X     X  X  X X       ',
            ms: '    X       X X     X     X X   ',
            hs: '@ms',
            re: 'f  hf  hf  hf  hf  hf  hf  hXhrh',
            sn: '....X.......X.......X.......X...',
            ta: '@ms',
            ag: 'o  a  o   a a a o  a  o   a a a ',
            sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.',
            mnemonics: {
                ls: "I like po-ta-toes, I like them mashed",
                ms: "Oh, do you? 'Cos I don't",
                re: "Mash is fine, but Mash is fine but Mash is fine but Chips are clea-rly be-tter",
                ag: "I like hash browns be-tter I like hash browns be-tter",
            }
        },
       "Alt Repi": {
           loop: true,
           re: '  X   X XXXXX X   X   X X XX XX ',
           sh: 'X   .   .   .   X   .   .   .   ',
           mnemonics: {  re: "I don't want to come off pi-cky, But you can't beat sa-lty chips" }
        },
        "Break 1": {
            ls: 'X X     X X   X X X     X       X X     X X   X X X     X       ',
            ms: '@ls',
            hs: '@ls',
            re: '    X X     X       X X   X   X     X X     X       X X   XXX   ',
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            mnemonics: {
                ls: "Boil them Fry them Just give us Spuds Boil them Fry them Just give us Spuds",
                re: "Mash them Up Give us With salt Mash them Up Give us On a plate"
            }
        },
        "Break 2": {
            ls: 'X X X X X X X X ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls',
            mnemonics: {  ls: "Hu-rry up, we're blee-ding star-ving" }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Break 1", "Tune", "Tune", "Break 2", "Tune", "Tune"]
}
