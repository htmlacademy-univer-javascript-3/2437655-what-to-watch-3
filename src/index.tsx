import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, AppProps} from "./components/app/app.tsx";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appProps: AppProps = {
    mainPageProps: {
        promoFilmTitle: "The Grand Budapest Hotel",
        promoFilmReleaseDate: 2014,
        promoFilmGenre: "Drama",
        promoFilmImage: "img/bg-the-grand-budapest-hotel.jpg"
    }
}

root.render(
  <React.StrictMode>
    <App {...appProps}/>
  </React.StrictMode>
);
