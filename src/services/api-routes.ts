export const ApiRoutes = {
  Films: '/films',
  PromoFilm: '/promo',
  Login: '/login',
  Logout: '/logout',
  Film: (id: string) => `/films/${id}`,
  SimilarFilms: (id: string) => `/films/${id}/similar`,
  FavoriteFilms: '/favorite',
  FavoriteFilm: (id: string, status: boolean) =>
    `/favorite/${id}/${status ? 1 : 0}`,
  Comments: (id: string) => `/comments/${id}`,
};
