import { createAction } from '@reduxjs/toolkit';

const Actions = {
  changeCity: 'changeCity',
  loadCityOffers: 'loadCityOffers',
  changeSortType: 'changeSortType',
  sortCityOffers: 'sortCityOffers'
};

export const changeCity = createAction<{cityName: string}>(Actions.changeCity);
export const loadCityOffers = createAction(Actions.loadCityOffers);
export const changeSortType = createAction<{sortTypeName: string}>(Actions.changeSortType);
export const sortCityOffers = createAction(Actions.sortCityOffers);
