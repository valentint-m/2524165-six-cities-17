import { Path } from '../../const';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offer-data/offer-data-selectors';
import FavoriteCityList from '../../components/favorite-city-list';
import NoFavoriteOffers from '../../components/no-favorite-offers';
import Header from '../../components/header';

function FavoritesScreen (): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteOffersCount = favoriteOffers.length;

  const citiesOfFavoriteOffers = new Set<string>();
  favoriteOffers.forEach((offer) => citiesOfFavoriteOffers.add(offer.city.name));

  return (
    <div className="page">
      <Header />

      {favoriteOffersCount === 0
        ? <NoFavoriteOffers />
        : <FavoriteCityList citiesOfFavoriteOffers={Array.from(citiesOfFavoriteOffers)} />}

      <footer className="footer container">
        <Link to={Path.Main} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
