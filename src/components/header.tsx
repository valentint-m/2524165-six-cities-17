import { AuthorizationStatus, Path } from '../const';
import { useAppSelector } from '../hooks';
import { Link } from 'react-router-dom';
import { store } from '../store';
import { logoutAction } from '../store/api-actions';

type HeaderProps = {
  favoritesCount: number;
}

export default function Header ({favoritesCount}: HeaderProps): JSX.Element {
  const isAuthorized = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.AUTH;

  function handleLogoutButtonClick (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evt.preventDefault();
    store.dispatch(logoutAction());
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={Path.Favorites} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>

                  {isAuthorized ? (
                    <div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </div>
                  ) : (
                    <span className="header__login">Sign in</span>
                  )}

                </Link>
              </li>
              <li className="header__nav-item">
                {isAuthorized && (
                  <a className="header__nav-link" href="#" onClick={handleLogoutButtonClick}>
                    <span className="header__signout">Sign out</span>
                  </a>
                )}

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
