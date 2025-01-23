import { City, Location, Offer } from '../types/offer';
import CityCard from './city-card';
import SortTypeList from './sort-type-list';
import Map from './map';
import { useState } from 'react';

type CityOffersListProps = {
  cityOffers: Offer[];
  city: City;
};

export default function CityOffersList ({cityOffers, city}: CityOffersListProps) {
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);

  function handleCityCardHover ({latitude, longitude}: Location) {
    const currentPoint = cityOffers.find((offer) => offer.location.latitude === latitude && offer.location.longitude === longitude);

    setSelectedPoint(currentPoint?.location);
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length > 1 ? `${cityOffers.length} places` : '1 place'} to stay in {city.name}</b>
        <SortTypeList />
        <div className="cities__places-list places__list tabs__content">
          {cityOffers.map((offer) => <CityCard offer={offer} onHoverOverCard={handleCityCardHover} isOnMainPage key={offer.id} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map locations={cityOffers.map((offer) => offer.location)} selectedPoint={selectedPoint}/>
        </section>
      </div>
    </div>
  );
}
