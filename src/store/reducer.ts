import { createReducer } from '@reduxjs/toolkit';
import { CityName } from '../mocks/mock-const';
import { Offers } from '../mocks/offers';

const initialState = {
  city: CityName.Amsterdam,
  offers: Offers,
};

const reducer = createReducer (initialState, (builder) => {

});

export { reducer };

