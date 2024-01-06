import classNames from 'classnames';
import { useAppDispatch } from '../../hooks/store.ts';
import { setGenre } from '../../store/action.ts';
import {Genre} from '../../constants';

type GenreItemProps = {
  genre: Genre;
  isActive?: boolean;
};

export const GenreItem = ({ genre, isActive }: GenreItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <li
      className={classNames('catalog__genres-item', {
        'catalog__genres-item--active': isActive,
      })}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(event) => {
          dispatch(setGenre(genre));
          event.preventDefault();
        }}
      >
        {genre}
      </a>
    </li>
  );
};
