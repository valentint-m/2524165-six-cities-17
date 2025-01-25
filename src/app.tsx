import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthorizationStatus, Path } from './const';
import { useAppSelector } from './hooks';
import { getErrorStatus, getOffersDataLoadingStatus } from './store/offer-data/offer-data-selectors';
import { getAuthorizationStatus } from './store/user-process/user-process-selectors';
import { store } from './store';
import { fetchFavoriteOffersAction } from './store/api-actions/api-actions';
import CitiesListScreen from './pages/cities-list-screen/cities-list-screen';
import ErrorRouteScreen from './pages/error-route-screen/error-route-screen';
import LoginScreen from './pages/login-screen/login-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import PrivateRoute from './components/private-route/private-route';
import LoadingScreen from './pages/loading-screen/loading-screen';
import ErrorServerScreen from './pages/error-server-screen/error-server-screen';
import { useEffect } from 'react';

function App (): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isLoggedIn) {
      store.dispatch(fetchFavoriteOffersAction());
    }
  }, [isLoggedIn]);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorServerScreen />);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<CitiesListScreen />} />
        <Route path={Path.Login} element={<LoginScreen />} />
        <Route path={Path.Favorites} element={
          <PrivateRoute>
            <FavoritesScreen />
          </PrivateRoute>
        }
        />
        <Route path={Path.Offer} element={<OfferScreen />} />
        <Route path='*' element={<ErrorRouteScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
