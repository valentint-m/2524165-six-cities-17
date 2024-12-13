import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferCity } from '../types/offer';

const Actions = {
  changeCity: 'changeCity',
  loadCityOffers: 'loadCityOffers'
};

export const changeCity = createAction<{cityName: OfferCity}>(Actions.changeCity);
export const loadCityOffers = createAction<{offers: Offer[]}>(Actions.loadCityOffers);
