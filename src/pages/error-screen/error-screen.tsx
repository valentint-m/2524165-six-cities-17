import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../const';

function ErrorScreen (): JSX.Element {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <br />
      <Link to={Path.Main}>Главная страница</Link>
    </Fragment>
  );
}

export default ErrorScreen;
