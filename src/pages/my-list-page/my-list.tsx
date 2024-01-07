import {Footer} from '../../components/footer/footer.tsx';
import {Film} from '../../types/film.ts';
import {FilmsList} from '../../components/films-list/films-list.tsx';
import {Header} from '../../components/header/header';
export type MyListPageProps = {
  films: Film[];
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
