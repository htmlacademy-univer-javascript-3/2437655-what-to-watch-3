import {MainPage} from '../../pages/main-page/main-page.tsx';
import {appRoutes} from '../../constants.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignInPage} from '../../pages/sign-in-page/sign-in-page.tsx';
import {MyListPage} from '../../pages/my-list-page/my-list.tsx';
import {FilmPage} from '../../pages/film-page/film.tsx';
import {AddReviewPage} from '../../pages/add-review-page/add-review-page.tsx';
import {PlayerPage} from '../../pages/player-page/player-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {Film} from '../../types/film';

export type AppProps = {
  promoFilm: Film;
  films: Film[];
}

export function App(props: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.Main}>
          <Route index element={<MainPage {...props}/>} />
          <Route path={appRoutes.SignIn} element={<SignInPage/>}/>
          <Route element={<PrivateRoute />}>
            <Route path={appRoutes.MyList} element={<MyListPage films={[]} />}/>
          </Route>
          <Route path={appRoutes.Film(':id')} element={<FilmPage/>}/>
          <Route path={appRoutes.AddReview(':id')} element={<AddReviewPage filmTitle={props.promoFilm.name} bgPath={props.promoFilm.bgPath}/>}/>
          <Route path={appRoutes.Player(':id')} element={<PlayerPage videoSource={props.promoFilm.previewVideoLink} posterPath={props.promoFilm.previewImage}/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
