import { Path } from '../../const';
import { Link } from 'react-router-dom';
import FavoriteCityList from '../../components/favorite-city-list';
import NoFavoriteOffers from '../../components/no-favorite-offers';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offer-data/offer-data-selectors';
import Header from '../../components/header';

function FavoritesScreen (): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteOffersCount = favoriteOffers.length;

  return (
    <div className="page">
      <Header favoriteOffersCount={favoriteOffersCount} />

      {favoriteOffersCount === 0
        ? <NoFavoriteOffers />
        : <FavoriteCityList offers={favoriteOffers} />}

      <footer className="footer container">
        <Link to={Path.Main} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
