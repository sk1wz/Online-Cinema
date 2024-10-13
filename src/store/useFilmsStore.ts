
// Хранилище
import { create } from 'zustand';
import { IFilm } from '@/Interfaces/AllInterfaces';

interface FilmState {
    films: IFilm[];
    setFilms: (newFilms: IFilm[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
    films: [],
    setFilms: (newFilms: Ifilm[]) => set(() => ({ films: newFilms })),
}));
