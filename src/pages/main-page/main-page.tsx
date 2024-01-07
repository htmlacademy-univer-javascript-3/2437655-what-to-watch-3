import {Footer} from '../../components/footer/footer.tsx';
import {FilmsList} from '../../components/films-list/films-list.tsx';
import {filterFilms} from '../../helpers/filterFilms.ts';
import {GenresList} from '../../components/genres-list/genres-list.tsx';
import {useCallback, useState} from 'react';
import {ShowMoreButton} from '../../components/show-more-button/show-more-button';
import {Loader} from '../../components/loader';
import {Header} from '../../components/header/header';
import {useAuthorizationStatusSelector, useCurrentGenreSelector} from '../../store/selectors';
import {AuthorizationStatus} from '../../types/auth';
import {ALL_GENRES} from '../../constants';
import {useFilms, usePromoFilm} from '../../hooks/films';

const FILMS_ON_PAGE_COUNT = 8;

export function MainPage(): JSX.Element {
  const { data: allFilms, isLoading } = useFilms();
  const { data: promoFilm } = usePromoFilm();
  const currentGenre = useCurrentGenreSelector();
  const films = filterFilms(allFilms, currentGenre);
  const genres = [ALL_GENRES, ...new Set(allFilms.map((film) => film.genre))];
  const authStatus = useAuthorizationStatusSelector();
  const [countFilms, setCountFilms] = useState(FILMS_ON_PAGE_COUNT);
  const handleShowMore = useCallback(() => {
    setCountFilms((prev) => prev + FILMS_ON_PAGE_COUNT);
  }, [setCountFilms]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                {authStatus === AuthorizationStatus.Auth && (
                  <button
                    className="btn btn--list film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Loader isLoading={isLoading}>
            <GenresList genres={genres} activeGenre={currentGenre} />
            <FilmsList filmCardProps={films.slice(0, countFilms)} />
            {countFilms < films.length && (
              <ShowMoreButton onClick={handleShowMore} />
            )}
          </Loader>
        </section>

        <Footer/>
      </div>
    </>
  );
}
