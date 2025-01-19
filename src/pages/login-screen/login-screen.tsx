import { Link, Navigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { FormEvent } from 'react';
import { loginAction } from '../../store/api-actions';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

function LoginScreen (): JSX.Element {
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.AUTH;

  function submitHandler (evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    if (email && password) {
      store.dispatch(loginAction({email: email, password: password}));
    }
  }

  if (isLoggedIn) {
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
            <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
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
              <Link to={Path.Main} className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;

