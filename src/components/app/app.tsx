import {MainPage} from '../../pages/main-page/main-page.tsx';
import {appRoutes} from '../../constants.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignInPage} from '../../pages/sign-in-page/sign-in-page.tsx';
import {MyListPage} from '../../pages/my-list-page/my-list.tsx';
import {FilmPage} from '../../pages/film-page/film.tsx';
import {AddReviewPage} from '../../pages/add-review-page/add-review-page.tsx';
import {PlayerPage, PlayerPageProps} from '../../pages/player-page/player-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';

type AppProps = {
  player: PlayerPageProps;
};

export function App(props: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.Main}>
          <Route index element={<MainPage/>} />
          <Route path={appRoutes.SignIn} element={<SignInPage/>}/>
          <Route element={<PrivateRoute />}>
            <Route path={appRoutes.MyList} element={<MyListPage />}/>
          </Route>
          <Route path={appRoutes.Film(':id')} element={<FilmPage/>}/>
          <Route path={appRoutes.AddReview(':id')} element={<AddReviewPage/>}/>
          <Route path={appRoutes.Player(':id')} element={<PlayerPage {...props.player}/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
