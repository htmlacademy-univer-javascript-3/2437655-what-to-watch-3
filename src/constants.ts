export const appRoutes = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id: string) => `/films/${id}`,
  Player: (id: number | string) => `/player/${id}`,
  AddReview: (id: number | string) => `/films/${id}/review`,
};
export const ALL_GENRES = 'All genres';
export const PLAYER = {
  videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  posterPath: 'img/player-poster.jpg',
};

export enum RatingLevel {
  VeryGood = 'Very good',
  Good = 'Good',
  Average = 'Average',
  Bad = 'Bad',
  VeryBad = 'Very bad'
}
