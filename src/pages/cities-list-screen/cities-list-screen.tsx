import { Offer, Location } from '../../types/offer';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import CityCard from '../../components/city-card';
import Map from '../../components/map';
import CityList from '../../components/city-list';
import SortTypeList from '../../components/sort-type-list';
import Header from '../../components/header';

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
      <Header favoritesCount={favoritesCount} />
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
