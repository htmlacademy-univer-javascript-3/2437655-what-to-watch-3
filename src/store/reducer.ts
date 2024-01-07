import {createReducer} from '@reduxjs/toolkit';
import {
  setFilms,
  setGenre,
  setLoadingFilms,
  setAvatarLink,
  setAuthorizationStatus,
  setFilm,
  setLoadingFilm,
  setSimilarFilms,
  setLoadingSimilarFilms,
  setLoadingPromoFilm,
  setPromoFilm,
  setComments,
  setLoadingComments,
  setErrorMessageFilm
} from './actions.ts';
import {FilmType, SimilarFilmType, FilmListType, CommentType, PromoFilmType} from '../types/filmType.ts';
import {AuthorizationStatus} from '../types/auth';
import {ALL_GENRES} from '../constants';

type state = {
  currentGenre: string;
  allFilms: { isLoading: boolean; error?: string; films: Array<FilmListType> };
  currentFilm: { isLoading: boolean; error?: string; film?: FilmType };
  similarFilms: {
    isLoading: boolean;
    error?: string;
    films: Array<SimilarFilmType>;
  };
  comments: {
    isLoading: boolean;
    error?: string;
    comments: Array<CommentType>;
  };
  user: {avatarLink: string; authorizationStatus: AuthorizationStatus};
  promoFilm: { isLoading: boolean; error?: string; film?: PromoFilmType };
};

const initialState: state = {
  currentGenre: ALL_GENRES,
  allFilms: { isLoading: false, films: [] },
  user: {authorizationStatus: AuthorizationStatus.Unknown, avatarLink: ''},
  promoFilm: { isLoading: false, film: undefined },
  currentFilm: { isLoading: false, film: undefined },
  similarFilms: { isLoading: false, films: [] },
  comments: { isLoading: false, comments: [] },
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
    })
    .addCase(setFilm, (state, value) => {
      state.currentFilm.film = value.payload;
    })
    .addCase(setLoadingFilm, (state, value) => {
      state.currentFilm.isLoading = value.payload;
    })
    .addCase(setSimilarFilms, (state, value) => {
      state.similarFilms.films = value.payload;
    })
    .addCase(setLoadingSimilarFilms, (state, value) => {
      state.similarFilms.isLoading = value.payload;
    })
    .addCase(setComments, (state, value) => {
      state.comments.comments = value.payload;
    })
    .addCase(setLoadingComments, (state, value) => {
      state.comments.isLoading = value.payload;
    })
    .addCase(setErrorMessageFilm, (state, value) => {
      state.currentFilm.error = value.payload;
    })
    .addCase(setLoadingPromoFilm, (state, value) => {
      state.promoFilm.isLoading = value.payload;
    })
    .addCase(setPromoFilm, (state, value) => {
      state.promoFilm.film = value.payload;
    });
});

export { reducer };
