import {Navigate, Outlet} from 'react-router-dom';
import {AuthorizationStatus} from '../../types/auth';
import {useAuthorizationStatusSelector} from '../../store/selectors';


export function PrivateRoute(): JSX.Element{
  const authStatus = useAuthorizationStatusSelector();
  return authStatus === AuthorizationStatus.Auth
    ? (<Outlet />)
    : (<Navigate to={'/login'} />);
}
