import { createReducer } from '@reduxjs/toolkit';
import { setFilms, setGenre } from './action.ts';
import { Films } from '../mocks/films.ts';
import { Film } from '../types/film.ts';
import {Genre} from '../constants';

type state = {
  currentGenre: Genre;
  allFilms: Array<Film>;
};

const initialState: state = {
  currentGenre: Genre.AllGenres,
  allFilms: Films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, value) => {
      state.currentGenre = value.payload;
    })
    .addCase(setFilms, (state, value) => {
      state.allFilms = value.payload;
    });
});

export { reducer };
