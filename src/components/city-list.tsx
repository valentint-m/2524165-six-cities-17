import City from './city';
import { useAppSelector } from '../hooks';

export default function CityList (): JSX.Element {
  const cityNames = useAppSelector((state) => state.cities).map((city) => city.name);
  const selectedCity = useAppSelector((state) => state.city.name);

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((cityName) => <City cityName={cityName} isSelected={selectedCity === cityName} key={cityName}/>)}
    </ul>
  );
}
