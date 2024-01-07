import {createReducer} from '@reduxjs/toolkit';
import {setFilms, setGenre, setLoadingFilms, setAvatarLink, setAuthorizationStatus} from './action.ts';
import {Film} from '../types/film.ts';
import {Genre} from '../constants';
import {AuthorizationStatus} from '../types/auth';

type state = {
  currentGenre: Genre;
  allFilms: { isLoading: boolean; isError: boolean; films: Array<Film> };
  user: {avatarLink: string; authorizationStatus: AuthorizationStatus};
};

const initialState: state = {
  currentGenre: Genre.AllGenres,
  allFilms: { isLoading: false, isError: false, films: [] },
  user: {authorizationStatus: AuthorizationStatus.Unknown, avatarLink: ''}
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
    })
    .addCase(setAuthorizationStatus, (state, value) => {
      state.user.authorizationStatus = value.payload;
    })
    .addCase(setAvatarLink, (state, value) => {
      state.user.avatarLink = value.payload;
    });
});

export { reducer };
