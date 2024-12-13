import { createAction } from '@reduxjs/toolkit';

const Actions = {
  changeCity: 'changeCity',
  loadCityOffers: 'loadCityOffers'
};

export const changeCity = createAction<{cityName: string}>(Actions.changeCity);
export const loadCityOffers = createAction(Actions.loadCityOffers);
