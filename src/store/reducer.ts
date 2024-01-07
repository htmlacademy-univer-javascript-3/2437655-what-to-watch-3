import { combineReducers } from '@reduxjs/toolkit';
import { promoFilm } from './promoFilm/promoFilm.ts';
import { Namespace } from './namespace.ts';
import { film } from './film/film.ts';
import { films } from './films/films.ts';
import { similarFilms } from './similarFilms/similarFilms.ts';
import { user } from './user/user.ts';
import { comments } from './comments/comments.ts';
import {favouriteFilms} from './favouriteFilms/favouriteFilms';

export const rootReducer = combineReducers({
  [Namespace.Film]: film.reducer,
  [Namespace.Films]: films.reducer,
  [Namespace.PromoFilm]: promoFilm.reducer,
  [Namespace.SimilarFilms]: similarFilms.reducer,
  [Namespace.FavouriteFilms]: favouriteFilms.reducer,
  [Namespace.User]: user.reducer,
  [Namespace.Comments]: comments.reducer,
});
