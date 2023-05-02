import { repeat } from "../../src/tuneHelper";

export default {
    categories: ["common", "tricky"],
    speed: 200,
    time: 2,
    sheet: require("./stolen.pdf"),
    description: require("./stolen.md").default,
    video: undefined,
    patterns: {
        Tune: {
            loop: true,
            ls: "XXXXXXXXX",
            ms: "  X   X   XX XX",
            hs: "@ms",
            re: "..X...X...X..XX.",
            sn: "..X...X...X...X.",
            ta: "X   X   X  XX X",
            ag: "          oa ao ",
            sh: "@sn"
        },
        "Alt Agogo": {
            displayName: 'Alt Agogô',
            loop: true,
            ag: "o ao  a  oaoo a ",
            sh: 'X . . . X . . . '
        },
        "Break 1": {
            time: 3,
            ls: repeat(3, "                     X  ") + "                     X     X        X        X  ",
            ms: "@ls",
            hs: "@ls",
            re: repeat(3, "XXXXXXXXXXXXX X  X      ") + "XXXXXXXXXXXXX X  X     fX       fX       fX     ",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls"
        },
        "2/4 Break": {
            ls: "X   X   X X X X ",
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls"
        },
        "Break 3": {
            ls: repeat(3, "X  X XX  X XX X ") + "X          XX X ",
            ms: "@ls",
            hs: "@ls",
            re: "@ls",
            sn: repeat(3, "X..X.XX..X.XX.X.") + "X          XX X ",
            ta: "@ls",
            ag: "@ls"
        },
        "Progressive Karla (Stolen)": {
            ls: "X X X X XXXXXXXXXXXXXXXXX       ",
            ms: "@ls",
            hs: "@ls",
            re: "X X X X XXXXXXXXffffffffX",
            sn: "@re",
            ta: "@ls",
            ag: "@ls"
        }
    },
    exampleSong: [{ tuneName: "General Breaks", patternName: "Whistle in" }, "Tune", "Tune", "Tune", "Tune", { tuneName: "General Breaks", patternName: "8 Hits" }, "Tune", "Tune", "Tune", "Tune", "Break 1",
                  "Tune", "Tune", "Tune", "Tune", "2/4 Break", "Tune", "Tune", "Tune", "Tune", "Break 3", "Tune", "Tune", "Tune", "Tune", "Progressive Karla (Stolen)"]
}
