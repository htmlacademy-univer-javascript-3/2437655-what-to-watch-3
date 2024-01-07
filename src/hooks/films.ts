import { useEffect, useCallback } from 'react';
import { useAppDispatch } from './store.ts';
import {
  fetchCommentsAction,
  fetchFilmAction,
  fetchFavouriteFilmsAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchSimilarFilmsAction,
} from '../store/apiActions.ts';
import { useAllFilmsSelector } from '../store/films/selectors.ts';
import { useCurrentFilmSelector } from '../store/film/selectors.ts';
import { usePromoFilmSelector } from '../store/promoFilm/selectors.ts';
import { useSimilarFilmsSelector } from '../store/similarFilms/selectors.ts';
import { useCommentsSelector } from '../store/comments/selectors.ts';
import {useFavouriteFilmsSelector} from '../store/favouriteFilms/selectors';

export const useFilms = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  const { data, isLoading, error } = useAllFilmsSelector();
  return { data: data, isLoading, error };
};

export const useFilm = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useCurrentFilmSelector();
  return { data: data, isLoading, error };
};

export const usePromoFilm = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  const { data, isLoading, error } = usePromoFilmSelector();
  return { data: data, isLoading, error };
};

export const useFavouriteFilms = () => {
  const dispatch = useAppDispatch();

  const fetchFavouriteFilms = useCallback(() => {
    dispatch(fetchFavouriteFilmsAction());
  }, [dispatch]);

  const { data, isLoading, error } = useFavouriteFilmsSelector();
  return { data: data, isLoading, error, fetchFavouriteFilms };
};

export const useSimilarFilms = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSimilarFilmsAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useSimilarFilmsSelector();
  return { data: data, isLoading, error };
};

export const useComments = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useCommentsSelector();
  return { data: data, isLoading, error };
};
