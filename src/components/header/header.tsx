import {Logo} from "../logo/logo.tsx";
import {UserBlock} from "./user-block.tsx";

export function Header(): JSX.Element {
    return (
        <header className="page-header film-card__head">
            <Logo/>

            <UserBlock/>
        </header>
    )
}
