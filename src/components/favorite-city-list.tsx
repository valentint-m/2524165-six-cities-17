import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { Path } from '../const';
import FavoriteCard from './favorite-card';

type FavoriteCityListProps = {
  offers: Offer[];
}

function FavoriteCityList ({offers}: FavoriteCityListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link to={Path.Main} className="locations__item-link">
              <span>Amsterdam</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">

          {offers.map((offer) => offer.isFavorite ? <FavoriteCard offer={offer} key={offer.id} /> : null)}

        </div>
      </li>
    </ul>
  );
}

export default FavoriteCityList;
