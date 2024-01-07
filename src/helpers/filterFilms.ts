import {FilmListType} from '../types/film';
import {ALL_GENRES} from '../constants';

export const filterFilms = (
  films: Array<FilmListType>,
  genre: string,
): Array<FilmListType> => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
