import {Film} from "../../mocks/films.ts";

export type FilmCardProps = {
  film: Film,
  onMouseEnter: () => void,
  onMouseLeave: () => void
}

export function FilmCard({film, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
      <div className="small-film-card__image">
        <img src={film.posterPath} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.title}</a>
      </h3>
    </article>
  );
}
