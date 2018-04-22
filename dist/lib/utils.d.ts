export declare const INVALID_NOTE = "Invalid Note!";
export declare enum Note {
    A_FLAT = "Ab",
    A = "A",
    A_SHARP = "A#",
    B_FLAT = "Bb",
    B = "B",
    B_SHARP = "B#",
    C_FLAT = "Cb",
    C = "C",
    C_SHARP = "C#",
    D_FLAT = "Db",
    D = "D",
    D_SHARP = "D#",
    E_FLAT = "Eb",
    E = "E",
    E_SHARP = "E#",
    F_FLAT = "Fb",
    F = "F",
    F_SHARP = "F#",
    G_FLAT = "Gb",
    G = "G",
    G_SHARP = "G#",
}
export declare const NOTE_NAMES: Note[];
export declare const FLAT_TO_SHARP_MAP: {
    [key: string]: Note;
};
export declare const SHARP_TO_FLAT_MAP: {
    [key: string]: Note;
};
export declare const SHARP_KEYS: Note[];
export declare const ALL_NOTE_NAMES: {
    [key: string]: Note;
};
export declare function flattenNote(note: Note): Note;
export declare function sharpenNote(note: Note): Note;
/**
 * Transform the note to one of the note in NOTE_NAMES
 */
export declare function noteToValidName(note: Note): Note;
/**
 * Given a chord (Dm, C#m6), this function will find the root note
 * from the given chord (D, C#).
 */
export declare function getNoteFromChordname(chord: string): Note;
export declare function isSharpKey(note: Note): boolean;
export declare function getVisibleNote(note: Note, isSharp?: boolean): Note;
