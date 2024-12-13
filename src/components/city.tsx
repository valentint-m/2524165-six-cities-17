import { useAppDispatch } from '../hooks';
import { changeCity, loadCityOffers } from '../store/actions';

type CityProps = {
  cityName: string;
  isSelected: boolean;
}

export default function City ({cityName, isSelected}: CityProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleClick () {
    if (!isSelected) {
      dispatch(changeCity({cityName}));
      dispatch(loadCityOffers());
    }
  }

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isSelected ? 'tabs__item--active' : null}`} onClick={handleClick}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}
