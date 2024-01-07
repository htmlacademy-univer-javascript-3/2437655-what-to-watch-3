import {appRoutes} from '../../constants.ts';
import {Link} from 'react-router-dom';
import {AddReviewForm} from '../../components/add-review-form/add-review-form.tsx';
import {Header} from '../../components/header/header';

export type AddReviewPageProps = {
  filmTitle: string;
  bgPath: string;

}

export function AddReviewPage({filmTitle, bgPath}: AddReviewPageProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={bgPath} alt={filmTitle}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={appRoutes.Film(':id')} className="breadcrumbs__link">{filmTitle}</Link>
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
  );
}
