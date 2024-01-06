import {Genre} from '../constants';
import {RatingLevel} from '../constants';

export type Film = {
  id: number;
  name: string;
  genre: Genre;
  releaseDate: number;
  previewImage: string;
  bgPath: string;
  ratingScore: number;
  RatingLevel: RatingLevel;
  RatingsCount: number;
  previewVideoLink: string;
}
