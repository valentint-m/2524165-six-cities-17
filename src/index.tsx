import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { NearbyOffers } from './mocks/offers';
import { UserComments } from './mocks/comments';
import { store } from './store';
import { Provider } from 'react-redux';
import { CityName } from './mocks/mock-const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App userComments={UserComments} nearbyOffers={NearbyOffers} cities={CityName}/>
    </Provider>
  </React.StrictMode>
);
