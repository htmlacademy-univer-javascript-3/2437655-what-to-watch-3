import {FilmCard, FilmCardProps} from '../film-card/film-card.tsx';

export type FilmsListProps = {
  filmCardProps: FilmCardProps[];
}

export function FilmsList({filmCardProps}: FilmsListProps): JSX.Element{

  return (
    <div className="catalog__films-list">
      {filmCardProps.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
}
