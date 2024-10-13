
// Хранилище
import { IFilm } from '@/Interfaces/AllInterfaces';
import { create } from 'zustand';

interface FilmState {
    films: IFilm[];
    setFilms: (newFilms: IFilm[]) => void;
}

export const usePostStore = create<FilmState>((set) => ({
    films: [],
    setFilms: (newFilms: IFilm[]) => set(() => ({ films: newFilms })),
}));
