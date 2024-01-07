import {Footer} from '../../components/footer/footer.tsx';
import {FilmsList} from '../../components/films-list/films-list.tsx';
import {Header} from '../../components/header/header';
import {useFavouriteFilms} from '../../hooks/films';

export const MyListPage = () => {
  const { data: films } = useFavouriteFilms();
  return (
    <div className="user-page">
      <Header isMyListPage>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{films.length}</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />
      </section>
      <Footer />
    </div>
  );
};
