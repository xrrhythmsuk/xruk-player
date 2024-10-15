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
            re: "f  h Xf  h Xf  h Xf  h Xf  h Xf  h Xf  h Xh r",
            sn: "...X.X...X.....X.X...X.....X.X...X.....X.X..XX.X",
            ta: "   X     X     X X   X     X X   X     X X   X",
            ag: "o  a ao  a ao a  o      o a  o      o a  o",
            sh: "X  X .X  X .X  X .X  X .X  X .X  X .X  X .X  X .",
            mnemonics: {
                ls: "Jo-shu-a Jo-shu-a Je-ri-cho's done for Je-ri-cho's done for Je-ri-cho's done for",
                ms: "Trum-pets soun-ding Walls fa-lling Walls fa-lling Walls fa-lling",
                re: "Je-ri-cho's crum-bl-ing Je-ri-cho's crum-bl-ing Je-ri-cho's crum-bl-ing Je-ri-cho's had it",
                sn:   ". . . Those . walls . . . will . . . . . Those . walls . . . will . . "
                    + ". . . Those . walls . . . will . . . . . Those . walls . . will fall . down",
                ta: "Walls are Fall-ing down Fall-ing down Fall-ing down",
                ag: "Jo-shu-a laughed when the wall came down Wall came down Wall came down"
            }
        },
        'Break 1': {
            upbeat: 3,
            ls: "X XX  X  X XX X",
            ms: "@ls",
            hs: "@ls",
            re: "X XX  X  X XX X     X  X  X",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls",
            sh: "@ls",
            mnemonics: {
                ls: "And the wall came tum-bl-ing down",
                re: "And the wall came tum-bl-ing down They've had it"
            }
        },
	'Call Break': {
            ls: "                     X           X           X                       X XX  X  X XX X",
            ms: "@ls",
            hs: "@ls",
            re: "X XX XX XX  X X  X      X X  X      X X  X      X XX XX XX  X X  X   X XX  X  X XX X     X  X  X",
            sn: "@ls",
            ta: "@ls",
            ag: "@ls",
            sh: "@ls",
            mnemonics: {
                ls: "Yep Yep Yep And the wall came tum-bl-ing down",
                re: "Jo-shu-a was figh-ting at Je-ri-cho Je-ri-cho Je-ri-cho Jo-shu-a was figh-ting at Je-ri-cho And the wall came tum-bl-ing down They've had it"
            }
        },
        'Break 2': {
            upbeat: 1,
            ls: " " + repeat(4, "                  X     "),
            ms: "@ls",
            hs: "@ls",
            re: " " + repeat(2, "f  h Xf  h Xf  h Xf  h Xf  h Xf  h Xf  h Xh r   "),
            sn: "@ls",
            ta: "XX XX  X X  X            X    XX XX X           XX XX  X X  X            X    XX XX X",
            ag: "aa aa  a o  a            a    aa ao a           aa aa  a o  a            a    aa ao a",
            sh: "@ls",
            mnemonics: {
                ta: "The trum-pet came ring-ing out Walls fell down to the ground The trum-pet came ring-ing out Walls fell down to the ground",
                ag: "The trum-pet came ring-ing out Walls fell down to the ground The trum-pet came ring-ing out Walls fell down to the ground"
            }
        },
        'Break 3': {
            ls: "s  s  s  s  s  s  s  s  s  s  s  s  s  s  s  s",
            ms: "@ls",
            hs: "@ls",
            re: "        X        X  X           X        X  X  X",
            sn: "@re",
            ta: "@re",
            ag: "@re",
            sh: "@re",
            mnemonics: {
                ls: "Drums came boo out Af-ter trum blast Drums came boo out a-fter wall o",
                re: "ming the pet ming the fell ver"
            }
        }
    },
    exampleSong: [ { tuneName: "Core Breaks", patternName: "Whistle in" }, "Tune", { patternName: "Tune", length: 8 }, "Break 1", "Tune", "Call Break", "Tune", "Break 2", "Tune", "Break 3"]
}
