import { Link } from 'react-router-dom';
import { Path } from '../../const';

function ServerErrorScreen (): JSX.Element {
  return (
    <>
      <h1>Не удалось получить данные с сервера</h1>
      <br />
      <Link to={Path.Main}>Главная страница</Link>
    </>
  );
}

export default ServerErrorScreen;
