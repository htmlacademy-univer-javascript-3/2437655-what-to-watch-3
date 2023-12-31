import classNames from 'classnames';
import { useAppDispatch } from '../../hooks/store.ts';
import { setGenre } from '../../store/films/films';

type GenreItemProps = {
  genre: string;
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
      <button
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        className="catalog__genres-link"
        onClick={(event) => {
          dispatch(setGenre(genre));
          event.preventDefault();
        }}
      >
        {genre}
      </button>
    </li>
  );
};
