import { repeat, sheetUrl } from "../../src/tuneHelper";

export default {
    categories: ["standard", "common", "onesurdo", "tricky"],
    sheet: sheetUrl + "sambasso.pdf",
    description: require("./sambasso.md").default,
    video: "https://tube.rhythms-of-resistance.org/videos/embed/f75a6a4e-121a-4170-aaf4-2e96a7eed95e",
    patterns: {
        Tune: {
            loop: true,
            ls: 'X  tX t X  tX t X  tX t X  tX t ',
            ms: '@ls',
            hs: '@ls',
            re: 'X..X..X..XX..XX.X..X..X..XX..XX.',
            sn: 'X..X..X...X..X..X..X..X...X..X..',
            ta: ' X XX X XX XX  X X XXXX X  XX   ',
            ag: 'o  aa oo a oo a o  aa oo a oo a ',
            sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.'
        },
        'Break 1': {
            ls: 'X  tX t XX XX   ',
            ms: '@ls',
            hs: '@ls',
            re: 'X..X..X.XX XX   ',
            sn: 'X..X..X.XX XX   ',
            ta: ' X XX X XX XX   ',
            ag: 'o  aa ooXX XX   ',
            sh: 'X X X X XX XX   ',
            ot: 'y w w           '
        },
        'Break 2': {
            ls: repeat(4, 'X X X X X       '),
            ms: '@ls',
            hs: '@ls',
            re: repeat(4, '          XX XX '),
            sn: '@re',
            ta: '@re',
            ag: '@re',
            sh: '@re',
            volumeHack: { 0: .1, 16: .4, 32: .7, 48: 1 }
        },
        'Intro': {
            upbeat: 1,
            ls: '         XX XX           XX XX           XX XX           XX XX                       X X X X XX X    X X   X X   X                   X X X X XX X    X X   X X   X                   X X X X XX X    X X   X X   X                   X X X X XX X    X X   X X   ',
            ms: '@ls',
            hs: '@ls',
            re: 'fX X X          fX X X          fX X X          fX X X           X..X..X..X..ffffX                               X..X..X..X..ffffX                               X..X..X..X..ffffX                               X..X..X..X..ffffX                               ',
            sn: '@ls',
            ta: '@ls',
            ag: '@ls',
            sh: '@ls'
        }
    },
    exampleSong: ["Intro", "Tune", "Tune", "Break 1", "Tune", "Tune", "Break 2", "Tune", "Tune"]
}