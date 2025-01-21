import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { Path } from '../const';
import FavoriteCard from './favorite-card';

type FavoriteCityListProps = {
  offers: Offer[];
}

function FavoriteCityList ({offers}: FavoriteCityListProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
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
      </section>
    </main>
  );
}

export default FavoriteCityList;
