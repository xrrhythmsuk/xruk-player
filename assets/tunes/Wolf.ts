export default {
    categories: ["new", "tricky"],
    sheet: require("./wolf.pdf"),
    description: require("./wolf.md").default,
    patterns: {
        Tune: {
            loop: true,
            ls: 'X XXX   XXXXX   X XXX   X   X   ',
            ms: '      XX      XX      XXXXXXXXXX',
            hs: '@ms',
            re: 'X XX  r X X X rrX XX  r  X XX rr',
            sn: 'f.X...X...X...X.f.X...X...X...X.',
            ta: 'X X     X X     XX XXX XX       ',
            ag: 'o ooo a   a   a o ooo a   a   a',
            sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.'
        },
       "Alt Tam": {
            loop: true,
            ta: 'X X     X X     XX XXX XX       X XX XX X X X X XX XXX XX       ',
            sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   '
        },
        "Break 1": {
            upbeat: 1,
            ls: 'XX X X X X       ',
            ms: '@ls',
            hs: '@ls',
            re: '@ls',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            ot: '           E D   '
        },
        "Break 2": {
            loop: true,
            ls: 'XXXXXXXXX  X XXXX     XXX       ',
            ms: '@ls',
            hs: '@ls',
            re: 'X XX  r X X X rrX XX  r  X XX rr',
            sn: 'f.X...X...X...X.f.X...X...X...X.',
            ta: 'X X     X X     XX XXX XX       ',
            ag: 'o ooo a   a   a o ooo a   a   a',
            sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.'
        }
    },
    exampleSong: [ { tuneName: "General Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Break 1", "Tune", "Tune", "Break 2", "Break 2", "Tune", "Tune", { tuneName: "General Breaks", patternName: "Wolf Break"}]
}
