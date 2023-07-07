export interface Lore {
    id: number;
    title: string;
}

export interface LoreDetail {
    id: number;
    name?: string;
    unofficialName: string;
    description: string;
    characters: string;
    albumSpan: string;
    extraNotes: string[];
    section: Lore[];
}