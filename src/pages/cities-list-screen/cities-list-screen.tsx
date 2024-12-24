import { Link } from 'react-router-dom';
import { Path } from '../../const';
import { Offer, Location } from '../../types/offer';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import CityCard from '../../components/city-card';
import Map from '../../components/map';
import CityList from '../../components/city-list';
import SortTypeList from '../../components/sort-type-list';

function CitiesListScreen (): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const cityOffers: Offer[] = useAppSelector((state) => state.offersByCity);

  function handleCityCardHover ({latitude, longitude}: Location) {
    const currentPoint = cityOffers.find((offer) => offer.location.latitude === latitude && offer.location.longitude === longitude);

    setSelectedPoint(currentPoint?.location);
  }

  let favoritesCount = 0;
  for (let i = 0; i < offers.length; i++) {
    if (offers[i].isFavorite) {
      favoritesCount++;
    }
  }

  return (
    <div className="page page--gray page--main">
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
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoritesCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in Amsterdam</b>
              <SortTypeList />
              <div className="cities__places-list places__list tabs__content">

                {cityOffers.map((offer) => <CityCard offer={offer} onHoverOverCard={handleCityCardHover} isOnMainPage key={offer.id} />)}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} locations={cityOffers.map((offer) => offer.location)} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CitiesListScreen;
