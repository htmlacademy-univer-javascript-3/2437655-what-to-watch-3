import {ReactNode, useCallback} from 'react';
import {logoutAction} from '../../store/apiActions';
import {useAppDispatch} from '../../hooks/store';
import {useAuthorizationStatusSelector, useAvatarLinkSelector} from '../../store/selectors';
import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';
import {AuthorizationStatus} from '../../types/auth';
import {appRoutes} from '../../constants';

type HeaderProps = {
  children?: ReactNode;
}

export function Header({children}: HeaderProps): JSX.Element {
  const authStatus = useAuthorizationStatusSelector();
  const avatarLink = useAvatarLinkSelector();
  const dispatch = useAppDispatch();
  const signOutHandler = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      dispatch(logoutAction());
    },
    [dispatch],
  );

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {children}
      {authStatus === AuthorizationStatus.Auth ? (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={avatarLink} alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a onClick={signOutHandler} className="user-block__link">
              Sign out
            </a>
          </li>
        </ul>
      ) : (
        <div className="user-block">
          <Link to={appRoutes.SignIn} className="user-block__link">
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
}

