import { Loader } from '../../components/loader.tsx';
import { GenresList} from '../../components/genres-list/genres-list';
import { FilmsList } from '../../components/films-list/films-list';
import { ShowMoreButton} from '../../components/show-more-button/show-more-button';
import { useFilms} from '../../hooks/films';
import { useCurrentGenreSelector } from '../../store/films/selectors.ts';
import { filterFilms } from '../../helpers/filterFilms.ts';
import { useCallback, useState } from 'react';
import {ALL_GENRES} from '../../constants';

const FILMS_PER_PAGE = 8;

export const MainPageFilmCatalog = () => {
  const { data: allFilms, isLoading } = useFilms();
  const currentGenre = useCurrentGenreSelector();
  const films = filterFilms(allFilms, currentGenre);
  const genres = [ALL_GENRES, ...new Set(allFilms.map((film) => film.genre))];
  const [countFilms, setCountFilms] = useState(FILMS_PER_PAGE);

  const handleShowMore = useCallback(() => {
    setCountFilms((prev) => prev + FILMS_PER_PAGE);
  }, [setCountFilms]);

  return (
    <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

      <Loader isLoading={isLoading}>
  <GenresList genres={genres} activeGenre={currentGenre} />
  <FilmsList films={films?.slice(0, countFilms)} />
  {countFilms < films?.length && (
    <ShowMoreButton onClick={handleShowMore} />
  )}
  </Loader>
  </section>
);
};
