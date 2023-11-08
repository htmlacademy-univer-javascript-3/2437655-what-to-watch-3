import {MainPage, MainPageProps} from '../../pages/main-page/main-page.tsx';
import {appRoutes, AuthorizationStatus} from '../../constants.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignInPage} from '../../pages/sign-in-page/sign-in-page.tsx';
import {MyListPage} from '../../pages/my-list-page/my-list.tsx';
import {FilmPage} from '../../pages/film-page/film.tsx';
import {AddReviewPage} from '../../pages/add-review-page/add-review-page.tsx';
import {PlayerPage} from '../../pages/player-page/player-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';

export type AppProps = MainPageProps

export function App(props: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.Main}>
          <Route index element={<MainPage {...props}/>} />
          <Route path={appRoutes.SignIn} element={<SignInPage/>}/>
          <Route
            path={appRoutes.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyListPage films={props.films}/>
              </PrivateRoute>
            }
          />
          <Route path={appRoutes.Film(':id')} element={<FilmPage/>}/>
          <Route path={appRoutes.AddReview(':id')} element={<AddReviewPage
            filmTitle={props.promoFilm.title}
            bgPath={props.promoFilm.bgPath}/>}/>
          <Route path={appRoutes.Player(':id')} element={<PlayerPage
            videoSource={props.promoFilm.videPath}
            posterPath={props.promoFilm.posterPath}/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
