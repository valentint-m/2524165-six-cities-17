import City from './city';
import { useAppSelector } from '../hooks';

type CityListProps = {
  cityNames: {
    [cityName: string]: string;
  };
};

export default function CityList ({cityNames}: CityListProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city.title);

  return (
    <ul className="locations__list tabs__list">
      {Object.keys(cityNames).map((cityName) => <City cityName={cityName} isSelected={selectedCity === cityName} key={cityName}/>)}
    </ul>
  );
}
