import {Footer} from "../../components/footer/footer.tsx";
import {FilmCard, FilmCardProps} from "../../components/film-card/film-card.tsx";
import {Header} from "../../components/header/header.tsx";

type MyListProps = {
    films: FilmCardProps[]
}

const films: FilmCardProps[] = [
    {
        title: "Fantastic Beasts: The Crimes of Grindelwald",
        image: "img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
    },
    {
        title: "Bohemian Rhapsody",
        image: "img/bohemian-rhapsody.jpg"
    },
    {
        title: "Macbeth",
        image: "img/macbeth.jpg"
    },
    {
        title: "Aviator",
        image: "img/aviator.jpg"
    },
    {
        title: "We need to talk about Kevin",
        image: "img/we-need-to-talk-about-kevin.jpg"
    },
    {
        title: "What We Do in the Shadows",
        image: "img/what-we-do-in-the-shadows.jpg"
    },
    {
        title: "Revenant",
        image: "img/revenant.jpg"
    },
    {
        title: "Johnny English",
        image: "img/johnny-english.jpg"
    },
    {
        title: "Shutter Island",
        image: "img/shutter-island.jpg"
    },
];

export function MyListPage(): JSX.Element {
    return (
        <div className="user-page">
            <Header/>

            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <div className="catalog__films-list">
                    {
                        films.map((filmCardProps) => <FilmCard {...filmCardProps}/>)
                    }
                </div>
            </section>

            <Footer/>
        </div>
    );
}
