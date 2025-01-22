import { store } from './store';
import { Provider } from 'react-redux';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import { setDefaultCity } from './store/offer-data/offer-data';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

Promise.all([store.dispatch(fetchOffersAction())]).then(() => store.dispatch(setDefaultCity()));
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

