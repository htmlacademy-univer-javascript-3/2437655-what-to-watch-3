import {Footer} from '../../components/footer/footer.tsx';
import {FilmsList} from '../../components/films-list/films-list.tsx';
import {Header} from '../../components/header/header';
import {FilmCardProps} from '../../components/film-card/film-card';
export type MyListPageProps = {
  films: FilmCardProps[];
}
export function MyListPage({films}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}
