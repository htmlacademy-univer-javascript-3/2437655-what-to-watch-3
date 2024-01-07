import {Navigate, Outlet} from 'react-router-dom';
import {AuthorizationStatus} from '../../types/auth';
import {useAuthorizationStatus} from '../../store/selectors';


export function PrivateRoute(): JSX.Element{
  const authStatus = useAuthorizationStatus();
  return authStatus === AuthorizationStatus.Auth
    ? (<Outlet />)
    : (<Navigate to={'/login'} />);
}
