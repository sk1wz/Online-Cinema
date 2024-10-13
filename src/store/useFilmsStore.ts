
// Хранилище
import { create } from 'zustand';

interface PostState {
    films: IFilm[];
    setFilms: (newFilms: IFilm[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
    films: [],
    setFilms: (newFilms: Ifilm[]) => set(() => ({ films: newFilms })),
}));
