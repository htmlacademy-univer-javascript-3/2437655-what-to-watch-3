import {Footer} from '../../components/footer/footer.tsx';
import {Film} from '../../types/film.ts';
import {FilmsList} from '../../components/films-list/films-list.tsx';
import {useAppSelector} from '../../hooks/store.ts';
import {filterFilms} from '../../helpers/filterFilms.ts';
import {GenresList} from '../../components/genres-list/genres-list.tsx';
import {Genre} from '../../constants';
import {useCallback, useState} from 'react';
import {ShowMoreButton} from '../../components/show-more-button/show-more-button';

const FILMS_ON_PAGE_COUNT = 8;

export type MainPageProps = {
    promoFilm: Film;
}

export function MainPage({promoFilm} : MainPageProps): JSX.Element {
  const { allFilms, currentGenre } = useAppSelector((state) => state);
  const films = filterFilms(allFilms, currentGenre);
  const genres = [Genre.AllGenres, ...new Set(allFilms.map((film) => film.genre))];
  const [countFilms, setCountFilms] = useState(FILMS_ON_PAGE_COUNT);
  const handleShowMore = useCallback(() => {
    setCountFilms((prev) => prev + FILMS_ON_PAGE_COUNT);
  }, [setCountFilms]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.bgPath} alt={promoFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterPath} alt={promoFilm.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} activeGenre={currentGenre}/>
          <FilmsList films={films.slice(0, countFilms)}/>
          {countFilms < films.length && (
            <ShowMoreButton onClick={handleShowMore} />
          )}
        </section>

        <Footer/>
      </div>
    </>
  );
}
