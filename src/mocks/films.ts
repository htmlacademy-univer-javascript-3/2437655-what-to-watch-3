import {Genre, RatingLevel} from '../constants.ts';
import {Film} from '../types/film.ts';

export const Films: Film[] = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    genre: Genre.Drama,
    releaseDate: 2014,
    posterPath: 'img/the-grand-budapest-hotel-poster.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 8.9,
    RatingLevel: RatingLevel.VeryGood,
    RatingsCount: 240,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: Genre.Drama,
    releaseDate: 2018,
    posterPath: 'img/bohemian-rhapsody.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 8.1,
    RatingLevel: RatingLevel.VeryGood,
    RatingsCount: 321,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 3,
    title: 'Macbeth',
    genre: Genre.Drama,
    releaseDate: 2015,
    posterPath: 'img/macbeth.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 5.7,
    RatingLevel: RatingLevel.Average,
    RatingsCount: 32,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 4,
    title: 'Aviator',
    genre: Genre.Drama,
    releaseDate: 2014,
    posterPath: 'img/aviator.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 8.3,
    RatingLevel: RatingLevel.VeryGood,
    RatingsCount: 421,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    genre: Genre.Thriller,
    releaseDate: 2012,
    posterPath: 'img/we-need-to-talk-about-kevin.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 2.1,
    RatingLevel: RatingLevel.VeryBad,
    RatingsCount: 163,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    genre: Genre.Comedy,
    releaseDate: 2019,
    posterPath: 'img/what-we-do-in-the-shadows.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 6.1,
    RatingLevel: RatingLevel.Good,
    RatingsCount: 54,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 7,
    title: 'Revenant',
    genre: Genre.Drama,
    releaseDate: 2016,
    posterPath: 'img/revenant.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 8.5,
    RatingLevel: RatingLevel.VeryGood,
    RatingsCount: 765,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 8,
    title: 'Johnny English',
    genre: Genre.Comedy,
    releaseDate: 2003,
    posterPath: 'img/johnny-english.jpg',
    bgPath: 'img/bg-the-grand-budapest-hotel.jpg',
    ratingScore: 3.9,
    RatingLevel: RatingLevel.Bad,
    RatingsCount: 285,
    videPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  }
];
