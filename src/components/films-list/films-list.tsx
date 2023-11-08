import {FilmCard} from '../film-card/film-card.tsx';
import {Film} from '../../mocks/films.ts';
import {useState} from 'react';

export type FilmsListProps = {
  films: Film[];
}

export function FilmsList({films}: FilmsListProps): JSX.Element{
  const [, setActiveCard] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          film={film}
          key={film.id}
          onMouseEnter={() => {
            setActiveCard(film.id);
          }}
          onMouseLeave={() => setActiveCard(null)}
        />))}
    </div>
  );
}
