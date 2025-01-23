import { Link } from 'react-router-dom';
import { CityName, Path } from '../const';
import { useAppSelector } from '../hooks';
import { getFavoriteOffers } from '../store/offer-data/offer-data-selectors';
import FavoriteCard from './favorite-card';

type FavoriteCityProps = {
  cityName: CityName;
}

export default function FavoriteCity ({cityName}: FavoriteCityProps) {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={Path.Main} className="locations__item-link">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">

        {favoriteOffers.map((offer) => offer.city.name === cityName ? <FavoriteCard offer={offer} key={offer.id} /> : null)}

      </div>
    </li>
  );
}
