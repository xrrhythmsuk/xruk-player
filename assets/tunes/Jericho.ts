import { repeat } from "../../src/tuneHelper";
export default {
    categories: ["new", "tricky"],
    speed: 120,
    time: 3,
    sheet: require("./jericho.pdf"),
    description: require("./jericho.md").default,
    video: undefined,
	
    patterns: {
        Tune: {
            loop: true,
            ls: "X X0  X X0  X X0 X   0  X X0 X   0  X X0 X   0",
            ms: "   X X   X X   0     X X   0     X X   0     X X",
            hs: "@ms",
            re: "f  h sf  h sf  h sf  h sf  h sf  h sf  h sX r",
            sn: "...X.X...X.....X.X...X.....X.X...X.....X.X..XX.X",
            ta: "   X     X     X X   X     X X   X     X X   X",
            ag: "o  a ao  a ao a  o      o a  o      o a  o",
            sh: "X  X .X  X .X  X .X  X .X  X .X  X .X  X .X  X ."
        },
        'Break 1': {
            upbeat: 3,
            ls: "X XX  X  X XX X",
            ms: "@ls",
            hs: "@ls",
            re: "X XX  X  X XX X     X  X  X",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls"
        },
        'Break 1 after short': {
            displayName: "e.g. Break 1 finishing main part",
            ls: "X X0  X X0  X X0 X   X XX  X  X XX X",
            ms: "   X X   X X   0     X XX  X  X XX X",
            hs: "@ms",
            re: "f  h sf  h sf  h sf  X XX  X  X XX X     X  X  X",
            sn: "...X.X...X.....X.X...X XX  X  X XX X",
            ta: "   X     X     X X   X XX  X  X XX X",
            ag: "o  a ao  a ao a  o   o oo  o  o oo o",
            sh: "X  X .X  X .X  X .X  X XX  X  X XX X"
        },
        'Break 2': {
            upbeat: 1,
            ls: " " + repeat(4, "                  X     "),
            ms: "@ls",
            hs: "@ls",
            re: " " + repeat(2, "f  h sf  h sf  h sf  h sf  h sf  h sf  h sX r   "),
            sn: "@ls",
            ta: "XX XX  X X  X            X    XX XX X           XX XX  X X  X            X    XX XX X",
            ag: "aa aa  a o  a            a    aa ao a           aa aa  a o  a            a    aa ao a"
        },
        'Break 3': {
            ls: "s  s  s  s  s  s  s  s  s  s  s  s  s  s  s  s",
            ms: "@ls",
            hs: "@ls",
            re: "        X        X  X           X        X  X  X",
            sn: "@re",
            ta: "@re",
            ag: "@re"
        },
        'Call Break': {
            ls: "                     X           X           X                       X XX  X  X XX X",
            ms: "@ls",
            hs: "@ls",
            re: "X XX XX XX  X X  X      X X  X      X X  X      X XX XX XX  X X  X   X XX  X  X XX X     X  X  X",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls"
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Call Break", "Tune", "Break 1 after short", "Tune", "Break 2", "Tune", "Break 3"]
}
