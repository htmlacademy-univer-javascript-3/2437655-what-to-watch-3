import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, AppProps} from './components/app/app.tsx';
import {Films} from './mocks/films.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appProps: AppProps = {
  promoFilm: Films[0],
  films: Films
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {...appProps}/>
    </Provider>
  </React.StrictMode>
);
