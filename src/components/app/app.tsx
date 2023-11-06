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

export type AppProps = {
    mainPageProps: MainPageProps;
}

export function App({mainPageProps}: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage {...mainPageProps}/>} />
        <Route path={AppRoute.SignIn} element={<SignInPage/>}/>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmPage/>}/>
        <Route path={AppRoute.AddReview} element={<AddReviewPage
        filmTitle={mainPageProps.promoFilm.title}
        bgPath={mainPageProps.promoFilm.bgPath}/>}/>
        <Route path={AppRoute.Player} element={<PlayerPage
          videoSource={mainPageProps.promoFilm.videPath}
          posterPath={mainPageProps.promoFilm.posterPath}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
