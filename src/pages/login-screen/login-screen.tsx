import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { FormEvent } from 'react';
import { loginAction } from '../../store/api-actions/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getLoggingOutStatus } from '../../store/user-process/user-process-selectors';
import { getCities } from '../../store/offer-data/offer-data-selectors';
import { getRandomInt } from '../../utils/utils';
import { offerData } from '../../store/offer-data/offer-data';

function LoginScreen (): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const isLoggingOut = useAppSelector(getLoggingOutStatus);
  const cities = useAppSelector(getCities);
  const randomCity = cities[getRandomInt(0, cities.length - 1)].name;

  function handleSubmit (evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    if (email && password) {
      dispatch(loginAction({email: email, password: password}));
    }
  }

  function handleCityButtonClick (evt: React.MouseEvent<HTMLAnchorElement>) {
    evt.preventDefault();

    if (randomCity) {
      dispatch(offerData.actions.changeCity(randomCity));
    }

    navigate(Path.Main);
  }

  if (isLoggedIn && !isLoggingOut) {
    return (
      <Navigate to={Path.Main} />
    );
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={Path.Main} className="header__logo-link" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a href="" className="locations__item-link" onClick={handleCityButtonClick}>
                <span>{randomCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;

