import { store } from './store';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

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
