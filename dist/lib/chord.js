"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Chord = /** @class */ (function () {
    function Chord(chord, key, isSharp) {
        // Root chord name. (For Am, the root note is Note.A)
        this.note = utils_1.Note.A;
        // The key for the song.
        this.key = utils_1.Note.A;
        // Chord with no variation are considered minor chords.
        this.variation = '';
        // True for keys written in sharp keys. (A = 3 sharps).
        this.isSharpKey = true;
        this.note = utils_1.getNoteFromChordname(chord);
        this.variation = chord.substring(String(this.note).length);
        this.key = key ? utils_1.getNoteFromChordname(key) : this.note;
        this.setIsSharpKey(isSharp);
    }
    Chord.prototype.setIsSharpKey = function (isSharp) {
        this.isSharpKey = isSharp === undefined ? utils_1.isSharpKey(this.key) : isSharp;
    };
    Chord.prototype.flatten = function () {
        this.note = utils_1.flattenNote(this.note);
        this.key = utils_1.flattenNote(this.key);
        this.setIsSharpKey();
    };
    Chord.prototype.sharpen = function () {
        this.note = utils_1.sharpenNote(this.note);
        this.key = utils_1.sharpenNote(this.key);
        this.setIsSharpKey();
    };
    Chord.prototype.getChord = function () {
        return utils_1.getVisibleNote(this.note, this.isSharpKey).toString() + this.variation;
    };
    return Chord;
}());
exports.Chord = Chord;
