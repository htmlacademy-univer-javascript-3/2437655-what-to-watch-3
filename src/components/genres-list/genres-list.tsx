import { GenreItem} from './genre-item';
import {Genre} from '../../constants';

type GenresListProps = {
  genres: Genre[];
  activeGenre: string;
};

export const GenresList = ({ genres, activeGenre }: GenresListProps) => (
  <ul className="catalog__genres-list">
    {genres.map((genre) => (
      <GenreItem key={genre} genre={genre} isActive={genre === activeGenre} />
    ))}
  </ul>
);
