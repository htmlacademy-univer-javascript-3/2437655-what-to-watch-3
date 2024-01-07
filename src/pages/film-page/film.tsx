import {Footer} from '../../components/footer/footer.tsx';
import {appRoutes} from '../../constants.ts';
import {Link} from 'react-router-dom';
import {Tabs} from '../../components/tabs/tabs.tsx';
import {Tab} from '../../components/tabs/tab.tsx';
import {OverviewTab} from './tabs/overview-tab.tsx';
import {DetailsTab} from './tabs/details-tab.tsx';
import {ReviewsTab} from './tabs/reviews-tab.tsx';
import {FilmsList} from '../../components/films-list/films-list';
import {Header} from '../../components/header/header';
import {useAuthorizationStatusSelector} from '../../store/user/selectors';
import {useFilm, useSimilarFilms} from '../../hooks/films';
import {Loader} from '../../components/loader';
import {AuthorizationStatus} from '../../types/auth';
import {usePathId} from '../../hooks/usePathId';

export function FilmPage(): JSX.Element {
  const id = usePathId();
  const authStatus = useAuthorizationStatusSelector();
  const { data: film, error, isLoading } = useFilm(id);
  const { data: similarFilms } = useSimilarFilms(id);
  return (
    <Loader isLoading={isLoading}>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          {error
            ? (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> {error} </div>)
            : (
              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{film?.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{film?.genre}</span>
                    <span className="film-card__year">{film?.released}</span>
                  </p>

                  <div className="film-card__buttons">
                    <button className="btn btn--play film-card__button" type="button">
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
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
                    {authStatus === AuthorizationStatus.Auth && (
                      <Link
                        to={appRoutes.AddReview(id || '')}
                        className="btn film-card__button"
                      >
                        Add review
                      </Link>
                    )}
                  </div>
                </div>
              </div>)}

        </div>

        {!error && (
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <Tabs>
                  <Tab name="Overview">
                    <OverviewTab />
                  </Tab>
                  <Tab name="Details">
                    <DetailsTab />
                  </Tab>
                  <Tab name="Reviews">
                    <ReviewsTab />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>)}
      </section>

      {!error && (
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={similarFilms} />
          </section>
          <Footer />
        </div>
      )}
    </Loader>
  );
}
