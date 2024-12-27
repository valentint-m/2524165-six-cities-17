import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../const';
import { useAppSelector } from '../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute ({children }: PrivateRouteProps): JSX.Element {
  const isLoggedIn = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.AUTH;

  return isLoggedIn ? children : <Navigate to={Path.Login} />;
}

export default PrivateRoute;
