import { createReducer } from '@reduxjs/toolkit';
import { CityName } from '../mocks/mock-const';
import { Offers } from '../mocks/offers';
import { changeCity, loadCityOffers } from './actions';
import { getCityByName, getOffersByCity } from '../city-selection-logic';
import { City, Offer } from '../types/offer';
import { CityInfo } from '../mocks/cities';

type State = {
  city: City;
  offers: Offer[];
  offersByCity: Offer[];
}

const initialState: State = {
  city: {
    title: CityName.Paris,
    location: {
      lat: 52.35514938496378,
      lng: 4.673877537499948,
      zoom: 8
    }
  },
  offers: Offers,
  offersByCity: Offers.slice(0, 4),
};

const reducer = createReducer (initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = getCityByName(CityInfo, action.payload.cityName);
  })
    .addCase(loadCityOffers, (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.city.title);
    });
});

export { reducer };

