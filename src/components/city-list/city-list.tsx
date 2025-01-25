import { CityName } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/offer-data/offer-data-selectors';
import City from './city';

export default function CityList (): JSX.Element {
  const cityNames = CityName;
  const selectedCity = useAppSelector(getCity).name;

  return (
    <ul className="locations__list tabs__list">
      {Object.values(cityNames).map((cityName) => <City cityName={cityName} isSelected={selectedCity === cityName} key={cityName}/>)}
    </ul>
  );
}

