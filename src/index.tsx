import { store } from './store';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { fetchOffersAction, checkAuthAction, fetchFavoriteOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoriteOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

