import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {setAuthorizationStatus, setAvatarLink, setFilms, setLoadingFilms} from './action.ts';
import { Film} from '../types/film';
import { ApiRoutes} from '../services/api-routes';
import {AuthData, AuthorizationStatus, UserData} from '../types/auth';
import {dropToken, saveToken} from '../services/token';

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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: user } = await api.get<UserData>(ApiRoutes.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setAvatarLink(user.avatarUrl));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  });

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('user/login', async ({ email, password }, { dispatch, extra: api }) => {
    const {
      data: { avatarUrl, token },
    } = await api.post<UserData>(ApiRoutes.Login, { email, password });
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setAvatarLink(avatarUrl));
  });

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('user/logout', async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoutes.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  });
