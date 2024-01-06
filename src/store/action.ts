import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film.ts';
import {Genre} from '../constants';

export const setGenre = createAction<Genre>('films/setGenre');

export const setFilms = createAction<Array<Film>>('films/setFilms');

export const setLoadingFilms = createAction<boolean>('films/setLoadingFilms');
