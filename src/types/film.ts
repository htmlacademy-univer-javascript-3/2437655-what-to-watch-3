import {Genre} from '../constants';
import {RatingLevel} from '../constants';

export type Film = {
  id: number;
  title: string;
  genre: Genre;
  releaseDate: number;
  posterPath: string;
  bgPath: string;
  ratingScore: number;
  RatingLevel: RatingLevel;
  RatingsCount: number;
  videPath: string;
}
