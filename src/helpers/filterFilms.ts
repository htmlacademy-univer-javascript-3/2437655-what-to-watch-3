import {Film} from '../types/film';
import {Genre} from '../constants';

export const filterFilms = (
  films: Array<Film>,
  genre: Genre,
): Array<Film> => {
  if (genre === Genre.AllGenres) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
