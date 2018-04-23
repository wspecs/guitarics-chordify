"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chord_1 = require("../lib/chord");
var chai_1 = require("chai");
describe('Chord class', function () {
    var chord;
    beforeEach(function () {
        chord = new chord_1.Chord('Cm7');
    });
    it('initializes', function () {
        chai_1.expect(chord.note).to.equal('C');
        chai_1.expect(chord.key).to.equal('C');
        chai_1.expect(chord.variation).to.equal('m7');
        chai_1.expect(chord.isSharpKey).to.equal(false);
    });
    it('gets chord', function () {
        chai_1.expect(chord.getChord()).to.equal('Cm7');
    });
    it('flattens chord', function () {
        chord.flatten();
        chai_1.expect(chord.getChord()).to.equal('Bm7');
    });
    it('sharpens chord', function () {
        chord.sharpen();
        chai_1.expect(chord.getChord()).to.equal('Dbm7');
    });
    it('sets key', function () {
        chord.setKey('F');
        chai_1.expect(chord.key).to.equal('F');
        // Make sure the the note is the same.
        chai_1.expect(chord.note).to.equal('C');
        chai_1.expect(chord.getChord()).to.equal('Cm7');
    });
    it('is sharp key', function () {
        chord.setKey('F'); // F has one flab
        chai_1.expect(chord.isSharpKey).to.equal(false);
        chord.setKey('G');
        chai_1.expect(chord.isSharpKey).to.equal(true);
    });
    it('specifies key on construction', function () {
        chord = new chord_1.Chord('C', 'F');
        chai_1.expect(chord.key).to.equal('F');
        chai_1.expect(chord.note).to.equal('C');
    });
    it('specifies sharp', function () {
        // Represent flatted note in sharp instead.
        chord = new chord_1.Chord('Db', 'Db', true);
        chai_1.expect(chord.isSharpKey).to.equal(true);
        chai_1.expect(chord.getChord()).to.equal('C#');
    });
    it('creates notes with sharp', function () {
        for (var _i = 0, _a = ['E#', 'F#', 'C#']; _i < _a.length; _i++) {
            var note = _a[_i];
            chord = new chord_1.Chord(note);
            chai_1.expect(chord.note).to.equal(note);
        }
    });
    it('creates notes with flat', function () {
        for (var _i = 0, _a = ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Gb']; _i < _a.length; _i++) {
            var note = _a[_i];
            chord = new chord_1.Chord(note);
            chai_1.expect(chord.note).to.equal(note);
        }
    });
});
