export const INVALID_NOTE = 'Invalid Note!';

export enum Note {
  A_FLAT = 'Ab',
  A = 'A',
  A_SHARP = 'A#',
  B_FLAT = 'Bb',
  B = 'B',
  B_SHARP = 'B#',
  C_FLAT = 'Cb',
  C = 'C',
  C_SHARP = 'C#',
  D_FLAT = 'Db',
  D = 'D',
  D_SHARP = 'D#',
  E_FLAT = 'Eb',
  E = 'E',
  E_SHARP = 'E#',
  F_FLAT = 'Fb',
  F = 'F',
  F_SHARP = 'F#',
  G_FLAT = 'Gb',
  G = 'G',
  G_SHARP = 'G#',
};

// All notes using only flat variations.
export const NOTE_NAMES = [
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

export const FLAT_TO_SHARP_MAP: {[key: string]: Note} = {
  Ab: Note.G_SHARP,
  Bb: Note.A_SHARP,
  Cb: Note.B,
  Db: Note.C_SHARP,
  Eb: Note.D_SHARP,
  Fb: Note.E,
  Gb: Note.F_SHARP
};

export const SHARP_TO_FLAT_MAP: {[key: string]: Note} = {
  'A#': Note.B_FLAT,
  'B#': Note.C,
  'C#': Note.D_FLAT,
  'D#': Note.E_FLAT,
  'E#': Note.F,
  'F#': Note.G_FLAT,
  'G#': Note.A_FLAT
};

export const SHARP_KEYS = [
  Note.G, Note.D, Note.A, Note.E, Note.B
];

export const ALL_NOTE_NAMES: {[key: string]: Note} = {}
for (const n in Note) {
  ALL_NOTE_NAMES[Note[n]] = Note[n] as Note;
}

export function flattenNote(note: Note) {
  const index = NOTE_NAMES.findIndex(x => x === noteToValidName(note));
  if (index === -1) {
    throw new Error(INVALID_NOTE);
  }
  return NOTE_NAMES[(index || NOTE_NAMES.length) - 1];
}

export function sharpenNote(note: Note) {
  let index = NOTE_NAMES.findIndex(x => x === noteToValidName(note));
  if (index === (NOTE_NAMES.length - 1)) {
    index = -1;
  }
  return NOTE_NAMES[index + 1];
}

/**
 * Transform the note to one of the note in NOTE_NAMES
 */
export function noteToValidName(note: Note) {
  // Transform to sharp to elimnate notes like Cb, Fb
  const sharpNote = FLAT_TO_SHARP_MAP[note] || note;
  // Then map back to flat notes.
  return SHARP_TO_FLAT_MAP[sharpNote] || sharpNote || note;
}

/**
 * Given a chord (Dm, C#m6), this function will find the root note
 * from the given chord (D, C#).
 */
export function getNoteFromChordname(chord: string) {
  chord = chord.trim();
  let note: Note|undefined;
  for (let size = chord.length; size > 0; size--) {
    note = ALL_NOTE_NAMES[chord.substring(0, size)];
    if (note) {
      return note;
    }
  }
  throw new Error(INVALID_NOTE);
}

export function isSharpKey(note: Note) {
  return SHARP_KEYS.findIndex(n => n === note) !== -1;
}

export function getVisibleNote(note: Note, isSharp = false) {
  if (isSharp) {
    return FLAT_TO_SHARP_MAP[note.toString()] || note; 
  }
  return note;
}