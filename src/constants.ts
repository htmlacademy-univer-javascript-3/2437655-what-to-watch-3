export const appRoutes = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id: string) => `/films/${id}`,
  Player: (id: string) => `/player/${id}`,
  AddReview: (id: string) => `/films/${id}/review`,
};
export const ALL_GENRES = 'All genres';
export const PLAYER = {
  videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  posterPath: 'img/player-poster.jpg',
};
