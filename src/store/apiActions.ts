import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFilms, setLoadingFilms } from './action.ts';
import { Film} from '../types/film';
import { ApiRoutes} from '../services/api-routes';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingFilms(true));
    const { data } = await api.get<Film[]>(ApiRoutes.Films);
    dispatch(setLoadingFilms(false));
    dispatch(setFilms(data));
  });
