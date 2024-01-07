import {Navigate, Outlet} from 'react-router-dom';
import {AuthorizationStatus} from '../../types/auth';
import {useAuthorizationStatusSelector} from '../../store/user/selectors';


export function PrivateRoute(): JSX.Element{
  const authStatus = useAuthorizationStatusSelector();
  return authStatus === AuthorizationStatus.Auth
    ? (<Outlet />)
    : (<Navigate to={'/login'} />);
}
