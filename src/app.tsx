import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Path } from './const';
import { Offer } from './types/offer';
import CitiesListScreen from './pages/cities-list-screen/cities-list-screen';
import ErrorScreen from './pages/error-screen/error-screen';
import LoginScreen from './pages/login-screen/login-screen';
import FavoritesScreen from './pages/favorites-list-screen/favorites-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route';

type AppScreenProps = {
  offersCount: number;
  offers: Offer;
}

function App ({offersCount, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<CitiesListScreen offersCount={offersCount} />} />
        <Route path={Path.Login} element={<LoginScreen />} />
        <Route path={Path.Favorites} element={
          <PrivateRoute>
            <FavoritesScreen />
          </PrivateRoute>
        }
        />
        <Route path={Path.Offer} element={<OfferScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
