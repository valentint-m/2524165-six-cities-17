import { Offer, Location } from '../../types/offer';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getCity, getFavoriteOffers, getOffersByCity } from '../../store/offer-data/offer-data-selectors';
import CityCard from '../../components/city-card';
import Map from '../../components/map';
import CityList from '../../components/city-list';
import SortTypeList from '../../components/sort-type-list';
import Header from '../../components/header';
import NoCityOffers from '../../components/no-city-offers';

function CitiesListScreen (): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);
  const favoriteOffersCount = useAppSelector(getFavoriteOffers).length;
  const city = useAppSelector(getCity);
  const cityOffers: Offer[] = useAppSelector(getOffersByCity);

  function handleCityCardHover ({latitude, longitude}: Location) {
    const currentPoint = cityOffers.find((offer) => offer.location.latitude === latitude && offer.location.longitude === longitude);

    setSelectedPoint(currentPoint?.location);
  }

  return (
    <div className="page page--gray page--main">
      <Header favoriteOffersCount={favoriteOffersCount} />
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
              <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
              <SortTypeList />
              <div className="cities__places-list places__list tabs__content">
                {cityOffers.length === 0
                  ? <NoCityOffers cityName={city.name} />
                  : cityOffers.map((offer) => <CityCard offer={offer} onHoverOverCard={handleCityCardHover} isOnMainPage key={offer.id} />)}

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
