import {Footer} from '../../components/footer/footer.tsx';
import {FilmCard, FilmCardProps} from '../../components/film-card/film-card.tsx';

const films: FilmCardProps[] = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    title: 'Bohemian Rhapsody',
    image: 'img/bohemian-rhapsody.jpg'
  },
  {
    title: 'Macbeth',
    image: 'img/macbeth.jpg'
  },
  {
    title: 'Aviator',
    image: 'img/aviator.jpg'
  },
  {
    title: 'We need to talk about Kevin',
    image: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    title: 'What We Do in the Shadows',
    image: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    title: 'Revenant',
    image: 'img/revenant.jpg'
  },
  {
    title: 'Johnny English',
    image: 'img/johnny-english.jpg'
  },
  {
    title: 'Shutter Island',
    image: 'img/shutter-island.jpg'
  },
];

export function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            films.map((filmCardProps) => <FilmCard {...filmCardProps} key={filmCardProps.title}/>)
          }
        </div>
      </section>

      <Footer/>
    </div>
  );
}
