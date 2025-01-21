/* eslint-disable react-refresh/only-export-components */
import { useAppSelector } from '../hooks';
import { getCities, getCity } from '../store/offer-data/offer-data-selectors';
import City from './city';
import React from 'react';

function CityList (): JSX.Element {
  const cityNames = useAppSelector(getCities).map((city) => city.name);
  const selectedCity = useAppSelector(getCity).name;

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((cityName) => <City cityName={cityName} isSelected={selectedCity === cityName} key={cityName}/>)}
    </ul>
  );
}

export default React.memo(CityList);
