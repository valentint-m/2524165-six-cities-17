import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Path } from './const';
import { useAppSelector } from './hooks';
import CitiesListScreen from './pages/cities-list-screen/cities-list-screen';
import ErrorScreen from './pages/error-screen/error-screen';
import LoginScreen from './pages/login-screen/login-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route';
import LoadingScreen from './pages/loading-screen/loading-screen';

function App (): JSX.Element {
  const offers = useAppSelector((state) => state.offersByCity);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<CitiesListScreen />} />
        <Route path={Path.Login} element={<LoginScreen />} />
        <Route path={Path.Favorites} element={
          <PrivateRoute>
            <FavoritesScreen offers={offers} />
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
