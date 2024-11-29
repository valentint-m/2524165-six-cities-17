import { Offer } from '../types/offer';
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
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
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
