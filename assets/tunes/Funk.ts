export default {
    categories: ["core", "easy"],
    sheet: require("./funk.pdf"),
    description: require("./funk.md").default,
    video: "https://www.youtube.com/embed/Yy9wq3sFivw",
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
                re: "Mash is fine, but Mash is fine, but Mash is fine, but Chips are clea-rly be-tter",
                ag: "I like hash browns be-tter I like hash browns be-tter",
            }
        },
       "Alt Repi": {
           loop: true,
           re: '  X   X XXXXX X   X   X X XX XX ',
           sh: 'X   .   .   .   X   .   .   .   ',
           mnemonics: {  re: "I don't want to come off pi-cky, But you can't beat sa-lty chips" }
        },
        "Starter Repi": {
            loop: true,
            re: 'X X X X X X X X XXXX            ',
            sh: 'X   .   .   .   X   .   .   .   ',
            mnemonics: {  re: "Hu-rry up we're blee-ding star-ving Give us some chips" }
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
        },
        "Tune Conga": {
            displayName: "Tune (Surdos Conga)",
            loop: true,
            ls: 'X     X X   X X X     X X   X X X   X   X   X   X   X   X   X   ',
            ms: '@ls',
            hs: '@ls',
            re: 'f  hf  hf  hf  hf  hf  hf  hXhrhf  hf  hf  hf  hf  hf  hf  hXhrh',
            sn: '....X.......X.......X.......X.......X.......X.......X.......X...',
            ta: '    X       X X     X     X X       X       X X     X     X X   ',
            ag: 'o  a  o   a a a o  a  o   a a a o  a  o   a a a o  a  o   a a a ',
            sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.',
            mnemonics: {  ls: "Py-thons like ki-ttens Py-thons like ki-ttens Ve-ry ta-sty Ve-ry ta-sty" }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune Conga", "Tune", "Tune", "Break 1", "Tune", "Tune", "Break 2", "Tune", "Tune"]
}
