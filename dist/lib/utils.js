"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVALID_NOTE = 'Invalid Note!';
var Note;
(function (Note) {
    Note["A_FLAT"] = "Ab";
    Note["A"] = "A";
    Note["A_SHARP"] = "A#";
    Note["B_FLAT"] = "Bb";
    Note["B"] = "B";
    Note["B_SHARP"] = "B#";
    Note["C_FLAT"] = "Cb";
    Note["C"] = "C";
    Note["C_SHARP"] = "C#";
    Note["D_FLAT"] = "Db";
    Note["D"] = "D";
    Note["D_SHARP"] = "D#";
    Note["E_FLAT"] = "Eb";
    Note["E"] = "E";
    Note["E_SHARP"] = "E#";
    Note["F_FLAT"] = "Fb";
    Note["F"] = "F";
    Note["F_SHARP"] = "F#";
    Note["G_FLAT"] = "Gb";
    Note["G"] = "G";
    Note["G_SHARP"] = "G#";
})(Note = exports.Note || (exports.Note = {}));
;
// All notes using only flat variations.
exports.NOTE_NAMES = [
    Note.A_FLAT,
    Note.A,
    Note.B_FLAT,
    Note.B,
    Note.C,
    Note.D_FLAT,
    Note.D,
    Note.E_FLAT,
    Note.E,
    Note.F,
    Note.G_FLAT,
    Note.G
];
exports.FLAT_TO_SHARP_MAP = {
    Ab: Note.G_SHARP,
    Bb: Note.A_SHARP,
    Cb: Note.B,
    Db: Note.C_SHARP,
    Eb: Note.D_SHARP,
    Fb: Note.E,
    Gb: Note.F_SHARP
};
exports.SHARP_TO_FLAT_MAP = {
    'A#': Note.B_FLAT,
    'B#': Note.C,
    'C#': Note.D_FLAT,
    'D#': Note.E_FLAT,
    'E#': Note.F,
    'F#': Note.G_FLAT,
    'G#': Note.A_FLAT
};
exports.SHARP_KEYS = [
    Note.G, Note.D, Note.A, Note.E, Note.B
];
exports.ALL_NOTE_NAMES = {};
for (var n in Note) {
    exports.ALL_NOTE_NAMES[Note[n]] = Note[n];
}
function flattenNote(note) {
    var index = exports.NOTE_NAMES.findIndex(function (x) { return x === noteToValidName(note); });
    if (index === -1) {
        throw new Error(exports.INVALID_NOTE);
    }
    return exports.NOTE_NAMES[(index || exports.NOTE_NAMES.length) - 1];
}
exports.flattenNote = flattenNote;
function sharpenNote(note) {
    var index = exports.NOTE_NAMES.findIndex(function (x) { return x === noteToValidName(note); });
    if (index === (exports.NOTE_NAMES.length - 1)) {
        index = -1;
    }
    return exports.NOTE_NAMES[index + 1];
}
exports.sharpenNote = sharpenNote;
/**
 * Transform the note to one of the note in NOTE_NAMES
 */
function noteToValidName(note) {
    // Transform to sharp to elimnate notes like Cb, Fb
    var sharpNote = exports.FLAT_TO_SHARP_MAP[note] || note;
    // Then map back to flat notes.
    return exports.SHARP_TO_FLAT_MAP[sharpNote] || sharpNote || note;
}
exports.noteToValidName = noteToValidName;
/**
 * Given a chord (Dm, C#m6), this function will find the root note
 * from the given chord (D, C#).
 */
function getNoteFromChordname(chord) {
    chord = chord.trim();
    var note;
    for (var size = chord.length; size > 0; size--) {
        note = exports.ALL_NOTE_NAMES[chord.substring(0, size)];
        if (note) {
            return note;
        }
    }
    throw new Error(exports.INVALID_NOTE);
}
exports.getNoteFromChordname = getNoteFromChordname;
function isSharpKey(note) {
    return exports.SHARP_KEYS.findIndex(function (n) { return n === note; }) !== -1;
}
exports.isSharpKey = isSharpKey;
function getVisibleNote(note, isSharp) {
    if (isSharp === void 0) { isSharp = false; }
    if (isSharp) {
        return exports.FLAT_TO_SHARP_MAP[note.toString()] || note;
    }
    return note;
}
exports.getVisibleNote = getVisibleNote;
