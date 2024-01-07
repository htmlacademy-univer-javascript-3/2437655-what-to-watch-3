import {FilmCard, FilmCardProps} from '../film-card/film-card.tsx';

export type FilmsListProps = {
  films: FilmCardProps[];
}

export function FilmsList({films}: FilmsListProps): JSX.Element{

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
}
