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
            re: 'X  XX r X X X rrX  XX r  XXXX rr',
            sn: 'f.X...X...X...X.f.X...X...X...X.',
            ta: 'X X     X X     XX XXX XX       ',
            ag: 'o ooo a   a   a o ooo a   a   a',
            sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.',
            mnemonics: {
                ls: "Here comes the wolf, ve-ry sca-ry wolf Here comes the Big Bad Wolf",
                ms: "And huff And puff Wolf will blow your li-ttle pi-ggy house down",
                re: "No-one told the Big Bad Wolf Li-ttle Red Ri-ding Hood was like as hard as nails",
                sn: "Grr . the . . . Big . . . Bad . . . Wolf . Grr . the . . . Big . . . Bad . . . Wolf .",
                ta: "Big Bad Wolf is hu-ffing and pu-ffing real tough",
                ag: "Pi-ggies aren't scared of the wolf Pi-ggies aren't scared of the wolf"
            }
        },
       "Alt Repi": {
           loop: true,
           re: 'X  XX  XX X X   XXXXX  XX X X   X  XX  XX X X   XXXXX  XX       ',
           sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   ',
           mnemonics: {  re: "Here he comes, the Big Bad Wolf Ve-ry sca-ry guy, the Big Bad Wolf "
               + "Here he comes, the Big Bad Wolf Ve-ry sca-ry guy, the wolf" }
       },
       "Alt Tam": {
           loop: true,
           ta: 'X X     X X     XX XXX XX       X XX XX X X X X XX XXX XX       ',
           sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   ',
           mnemonics: {  ta: "Big Bad Wolf is hu-ffing and pu-ffing real tough "
               + "Dressed up like your nan, come in close so Wol-fie can go-bble you up" }
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
            sh: '@ls',
            ot: '           E D   ',
            mnemonics: {
                ls: "No we're not scared at all",
                ot: "Ah Woo!"
            }
        },
        "Break 2": {
            loop: true,
            ls: 'XXXXXXXXX  X XXXX     XXX       ',
            ms: '@ls',
            hs: '@ls',
            sh: 'X   .   .   .   X   .   .   .   ',
            mnemonics: { ls: "Li-ttle pi-ggies got rid of the wolf, "
                + "So did Li-ttle Red With an axe" }
        },
        "Tune Break 2": {
            displayName: "Tune (Surdos Break 2)",
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
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Break 1", "Tune", "Tune", "Tune Break 2", "Tune Break 2", "Tune", "Tune", { tuneName: "More Breaks", patternName: "Wolf Break"}]
}
