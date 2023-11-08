import {Film} from '../../mocks/films.ts';
import {Link} from 'react-router-dom';
import {appRoutes} from '../../constants.ts';
import {useState} from 'react';
import {PreviewPlayer} from './preview-player.tsx';

export type FilmCardProps = {
  film: Film;
}

export function FilmCard({film}: FilmCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="small-film-card__image">
        <PreviewPlayer videoSource={film.videPath} posterSource={film.posterPath} isHovered={isHovered}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={appRoutes.Film(film.id)}>{film.title}</Link>
      </h3>
    </article>
  );
}
