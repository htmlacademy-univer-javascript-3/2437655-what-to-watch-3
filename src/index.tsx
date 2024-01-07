import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkAuthAction} from './store/apiActions';
import {PLAYER} from './constants';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App
        name={'The Grand Budapest Hotel'}
        genre={'Drama'}
        releaseDate={2014}
        player={PLAYER}
        posterImage={'img/the-grand-budapest-hotel-poster.jpg'}
        backgroundImage={'img/bg-the-grand-budapest-hotel.jpg'}
      />
    </Provider>
  </React.StrictMode>
);
