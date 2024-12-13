import { createReducer } from '@reduxjs/toolkit';
import { CityName } from '../mocks/mock-const';
import { Offers } from '../mocks/offers';
import { changeCity, loadCityOffers } from './actions';
import { getOffersByCity } from '../offer-select-logic';
import { Offer, OfferCity } from '../types/offer';

type State = {
  city: OfferCity;
  offers: Offer[];
  offersByCity: Offer[];
}

const initialState: State = {
  city: CityName.Amsterdam,
  offers: Offers,
  offersByCity: []
};

const reducer = createReducer (initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload.cityName;
  })
    .addCase(loadCityOffers, (state, action) => {
      state.offersByCity = getOffersByCity(action.payload.offers, state.city);
    });
});

export { reducer };

