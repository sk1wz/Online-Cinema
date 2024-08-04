export interface IFilm {
    id: number;
    title: string;
    description: string;
    img: string;
    rating: number;
    handleFavorite: Function;
}