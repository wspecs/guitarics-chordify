import { Note } from './utils';
export declare class Chord {
    note: Note;
    key: Note;
    variation: string;
    isSharpKey: boolean;
    constructor(chord: string, key?: string, isSharp?: boolean);
    setIsSharpKey(isSharp?: boolean): void;
    flatten(): void;
    sharpen(): void;
    getChord(): string;
}
