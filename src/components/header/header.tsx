import {ReactNode, useCallback} from 'react';
import {logoutAction} from '../../store/apiActions';
import {useAppDispatch} from '../../hooks/store';
import {useAuthorizationStatusSelector, useAvatarLinkSelector} from '../../store/user/selectors';
import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';
import {AuthorizationStatus} from '../../types/auth';
import {appRoutes} from '../../constants';
import {Logo} from '../logo/logo';
import classNames from 'classnames';

type HeaderProps = {
  children?: ReactNode;
  isMyListPage?: boolean;
}

export function Header({children, isMyListPage}: HeaderProps): JSX.Element {
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
    <header className={classNames('page-header', isMyListPage ? 'user-page__head' : 'film-card__head')}>
      <Logo/>
      {children}
      {authStatus === AuthorizationStatus.Auth ? (
        <ul className="user-block">
          <li className="user-block__item">
            <Link to={appRoutes.MyList}>
              <img
                src={avatarLink}
                alt="User avatar"
                width="63"
                height="63"
              />
            </Link>
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

