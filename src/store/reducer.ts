import { createReducer } from '@reduxjs/toolkit';
import { setFilms, setGenre, setLoadingFilms } from './action.ts';
import { Film } from '../types/film.ts';
import {Genre} from '../constants';

type state = {
  currentGenre: Genre;
  allFilms: { isLoading: boolean; isError: boolean; films: Array<Film> };
};

const initialState: state = {
  currentGenre: Genre.AllGenres,
  allFilms: { isLoading: false, isError: false, films: [] },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, value) => {
      state.currentGenre = value.payload;
    })
    .addCase(setFilms, (state, value) => {
      state.allFilms.films = value.payload;
    })
    .addCase(setLoadingFilms, (state, value) => {
      state.allFilms.isLoading = value.payload;
    });
});

export { reducer };
