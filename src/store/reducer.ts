import { createReducer } from '@reduxjs/toolkit';
import { CityName } from '../mocks/mock-const';
import { Offers } from '../mocks/offers';
import { changeCity, loadCityOffers } from './actions';

const initialState = {
  city: CityName.Amsterdam,
  offers: Offers,
};

const reducer = createReducer (initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload.cityName;
  })
    .addCase(loadCityOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export { reducer };

