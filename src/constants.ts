export const appRoutes = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id: number | string) => `/films/${id}`,
  Player: (id: number | string) => `/player/${id}`,
  AddReview: (id: number | string) => `/films/${id}/review`,
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Genre {
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  Kids = 'Kids',
  Family = 'Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller'
}

export enum RatingLevel {
  VeryGood = 'Very good',
  Good = 'Good',
  Average = 'Average',
  Bad = 'Bad',
  VeryBad = 'Very bad'
}
