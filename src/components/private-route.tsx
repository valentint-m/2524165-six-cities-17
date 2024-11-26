import { Navigate } from 'react-router-dom';
import { Path } from '../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute ({children}: PrivateRouteProps): JSX.Element {
  const isLoggedIn = false;

  return isLoggedIn ? children : <Navigate to={Path.Login} />;
}

export default PrivateRoute;
