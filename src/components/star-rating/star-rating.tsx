import {Star} from './star.tsx';

const maxRating = 10;

type RatingProps = {
  onClick: (value: number) => void;
};

export const StarRating = ({ onClick }: RatingProps) => (
  <div className="rating">
    <div className="rating__stars">
      {Array.from(Array(maxRating).keys()).map((i) => (
        <Star
          key={maxRating - i}
          value={maxRating - i}
          onClick={() => onClick(maxRating - i)}
        />
      ))}
    </div>
  </div>
);
