import {FilmCard} from '../film-card/film-card.tsx';
import {Film} from '../../types/film.ts';

export type FilmsListProps = {
  films: Film[];
}

export function FilmsList({films}: FilmsListProps): JSX.Element{

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}
