import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { getCity, getOffersByCity } from '../../store/offer-data/offer-data-selectors';
import CityList from '../../components/city-list';
import Header from '../../components/header';
import NoCityOffers from '../../components/no-city-offers';
import CityOffersList from '../../components/city-offers-list';

function CitiesListScreen (): JSX.Element {
  const city = useAppSelector(getCity);
  const cityOffers: Offer[] = useAppSelector(getOffersByCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
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
