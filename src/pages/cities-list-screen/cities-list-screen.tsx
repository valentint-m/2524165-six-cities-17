import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { getCity, getOffersByCity } from '../../store/offer-data/offer-data-selectors';
import { store } from '../../store';
import { offerData } from '../../store/offer-data/offer-data';
import { useEffect } from 'react';
import { CityName } from '../../const';
import CityList from '../../components/city-list';
import Header from '../../components/header';
import NoCityOffers from '../../components/no-city-offers';
import CityOffersList from '../../components/city-offers-list';

function CitiesListScreen (): JSX.Element {
  const city = useAppSelector(getCity);
  const cityOffers: Offer[] = useAppSelector(getOffersByCity);

  useEffect(() => {
    if (city.name === CityName.Paris && city.location.latitude === 0) {
      store.dispatch(offerData.actions.setDefaultCity());
    }
  }, [city]);

  return (
    <div className="page page--gray page--main">
      <Header isClosedPage={false}/>
      <main className={`page__main page__main--index ${cityOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          {cityOffers.length === 0
            ? <NoCityOffers cityName={city.name} />
            : <CityOffersList cityOffers={cityOffers} city={city} />}
        </div>
      </main>
    </div>
  );
}

export default CitiesListScreen;
