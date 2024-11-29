import { Navigate } from 'react-router-dom';
import { Path } from '../const';

type PrivateRouteProps = {
  children: JSX.Element;
  isLoggedIn: boolean;
};

function PrivateRoute ({children, isLoggedIn}: PrivateRouteProps): JSX.Element {
  return isLoggedIn ? children : <Navigate to={Path.Login} />;
}

export default PrivateRoute;
