import {MainPage, MainPageProps} from '../../pages/main-page/main-page.tsx';
import {AppRoute, AuthorizationStatus} from '../../constants.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignInPage} from '../../pages/sign-in-page/sign-in-page.tsx';
import {MyListPage} from '../../pages/my-list-page/my-list.tsx';
import {FilmPage} from '../../pages/film-page/film.tsx';
import {AddReviewPage} from '../../pages/add-review-page/add-review-page.tsx';
import {PlayerPage} from '../../pages/player-page/player-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';

export type AppProps = MainPageProps

export function App({promoFilm, films}: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage promoFilm={promoFilm} films={films}/>} />
        <Route path={AppRoute.SignIn} element={<SignInPage/>}/>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmPage/>}/>
        <Route path={AppRoute.AddReview} element={<AddReviewPage
        filmTitle={promoFilm.title}
        bgPath={promoFilm.bgPath}/>}/>
        <Route path={AppRoute.Player} element={<PlayerPage
          videoSource={promoFilm.videPath}
          posterPath={promoFilm.posterPath}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
