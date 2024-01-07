import { Footer} from '../../components/footer/footer';
import { Header} from '../../components/header/header';
import { usePromoFilm} from '../../hooks/films';
import { AuthorizationStatus} from '../../types/auth';
import { useAuthorizationStatusSelector} from '../../store/user/selectors';
import { MainPageFilmCatalog} from './main-page-film-catalog';

export function MainPage(): JSX.Element {
  const authStatus = useAuthorizationStatusSelector();
  const { data: promoFilm } = usePromoFilm();

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
        <MainPageFilmCatalog/>
        <Footer/>
      </div>
    </>
  );
}
