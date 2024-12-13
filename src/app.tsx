import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Path } from './const';
import { OffersNearby } from './types/offer';
import { UserComment } from './types/comment';
import { useAppSelector } from './hooks';
import CitiesListScreen from './pages/cities-list-screen/cities-list-screen';
import ErrorScreen from './pages/error-screen/error-screen';
import LoginScreen from './pages/login-screen/login-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route';

type AppScreenProps = {
  cities: {
    [city: string]: string;
  };
  nearbyOffers: OffersNearby[];
  userComments: UserComment[];
}

function App ({ cities, nearbyOffers, userComments}: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offersByCity);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<CitiesListScreen cities={cities}/>} />
        <Route path={Path.Login} element={<LoginScreen />} />
        <Route path={Path.Favorites} element={
          <PrivateRoute isLoggedIn>
            <FavoritesScreen offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={Path.Offer} element={<OfferScreen offers={offers} userComments={userComments} nearbyOffers={nearbyOffers}/>} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
