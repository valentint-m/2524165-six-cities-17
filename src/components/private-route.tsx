import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../const';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-process/user-process-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute ({children }: PrivateRouteProps): JSX.Element {
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.AUTH;

  return isLoggedIn ? children : <Navigate to={Path.Login} />;
}

export default PrivateRoute;
