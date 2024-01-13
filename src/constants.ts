export const appRoutes = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id: string) => `/films/${id}`,
  Player: (id: string) => `/player/${id}`,
  AddReview: (id: string) => `/films/${id}/review`,
  NotFound: '/notfound',
};
export const ALL_GENRES = 'All genres';

export const EMAIL_REGEX =  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const PASSWORD_REGEX = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
