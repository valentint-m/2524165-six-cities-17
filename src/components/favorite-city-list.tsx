import { CityName } from '../const';
import FavoriteCity from './favorite-city';

type FavoriteCityListProps = {
  citiesOfFavoriteOffers: CityName[];
}

function FavoriteCityList ({citiesOfFavoriteOffers}: FavoriteCityListProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {citiesOfFavoriteOffers.map((city) => <FavoriteCity cityName={city} key={city} />)}
        </ul>
      </section>
    </main>
  );
}

export default FavoriteCityList;
