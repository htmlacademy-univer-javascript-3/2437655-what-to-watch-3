import {appRoutes} from '../../constants.ts';
import {Link} from 'react-router-dom';
import {AddReviewForm} from '../../components/add-review-form/add-review-form.tsx';
import {Header} from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {useFilm} from '../../hooks/films';
import {Loader} from '../../components/loader';

export function AddReviewPage(): JSX.Element {
  const { id } = useParams();
  const { film, isLoading } = useFilm(id);
  return (
    <Loader isLoading={isLoading}>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={appRoutes.Film(id)} className="breadcrumbs__link">{film?.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="film-card__poster film-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <AddReviewForm/>
      </section>
    </Loader>
  );
}
