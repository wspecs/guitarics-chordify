import {Chord} from '../lib/chord';
import { expect } from 'chai';

describe('Chord class', () => {
  let chord: Chord;  
  beforeEach(() => {
    chord = new Chord('Cm7');
  });

  it('initializes', () => {
    expect(chord.note).to.equal('C');
    expect(chord.key).to.equal('C');
    expect(chord.variation).to.equal('m7');
    expect(chord.isSharpKey).to.equal(false);
  });

  it('gets chord', () => {
    expect(chord.getChord()).to.equal('Cm7');
  });

  it('flattens chord', () => {
    chord.flatten();
    expect(chord.getChord()).to.equal('Bm7');
  });

  it('sharpens chord', () => {
    chord.sharpen();
    expect(chord.getChord()).to.equal('Dbm7');
  });

  it('sets key', () => {
    chord.setKey('F');
    expect(chord.key).to.equal('F');

    // Make sure the the note is the same.
    expect(chord.note).to.equal('C');
    expect(chord.getChord()).to.equal('Cm7');
  });

  it('is sharp key', () => {
    chord.setKey('F'); // F has one flab
    expect(chord.isSharpKey).to.equal(false);

    chord.setKey('G');
    expect(chord.isSharpKey).to.equal(true);
  });

  it('specifies key on construction', () => {
    chord = new Chord('C', 'F');
    expect(chord.key).to.equal('F');
    expect(chord.note).to.equal('C');
  });

  it('specifies sharp', () => {
    // Represent flatted note in sharp instead.
    chord = new Chord('Db', 'Db', true);

    expect(chord.isSharpKey).to.equal(true);
    expect(chord.getChord()).to.equal('C#');
  });

  it('creates notes with sharp', () => {
    for (const note of ['E#', 'F#', 'C#']) {
      chord = new Chord(note);
      expect(chord.note).to.equal(note);
    }
  });

  it('creates notes with flat', () => {
    for (const note of ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Gb']) {
      chord = new Chord(note);
      expect(chord.note).to.equal(note);
    }
  });
});
