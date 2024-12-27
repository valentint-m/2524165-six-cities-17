import { Link, Navigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/api-actions';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';

function LoginScreen (): JSX.Element {
  const isLoggedIn = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.AUTH;

  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function submitHandler (evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (inputEmailRef.current && inputPasswordRef.current) {
      const email = inputEmailRef.current.value;
      const password = inputPasswordRef.current.value;
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
                <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={inputEmailRef} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" ref={inputPasswordRef} required />
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

