import {getNoteFromChordname, getVisibleNote, isSharpKey, Note, sharpenNote, flattenNote} from './utils';

export class Chord {
  // Root chord name. (For Am, the root note is Note.A)
  note: Note = Note.A;

  // The key for the song.
  key: Note = Note.A;

  // Chord with no variation are considered minor chords.
  variation: string = '';

  // True for keys written in sharp keys. (A = 3 sharps).
  isSharpKey = true;

  constructor(chord: string, key?: string, isSharp?: boolean) {
    this.note = getNoteFromChordname(chord);
    this.variation = chord.substring(String(this.note).length);
    this.key = key ? getNoteFromChordname(key) : this.note;
    this.setIsSharpKey(isSharp);
  }

  setKey(key: string) {
    this.key = getNoteFromChordname(key);
    this.setIsSharpKey();
  }

  setIsSharpKey(isSharp?: boolean) {
    this.isSharpKey = isSharp === undefined ? isSharpKey(this.key) : isSharp;
  }

  flatten() {
    this.note = flattenNote(this.note);
    this.key = flattenNote(this.key);
    this.setIsSharpKey();
  }

  sharpen() {
    this.note = sharpenNote(this.note);
    this.key = sharpenNote(this.key);
    this.setIsSharpKey();
  }

  getChord() {
    return getVisibleNote(this.note, this.isSharpKey).toString() + this.variation;
  }
}
