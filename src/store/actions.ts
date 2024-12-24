import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

const Actions = {
  changeCity: 'changeCity',
  loadOffers: 'loadOffers',
  loadCityOffers: 'loadCityOffers',
  changeSortType: 'changeSortType',
  sortCityOffers: 'sortCityOffers'
};

export const changeCity = createAction<{cityName: string}>(Actions.changeCity);
export const loadOffers = createAction<Offer[]>(Actions.loadOffers);
export const loadCityOffers = createAction(Actions.loadCityOffers);
export const changeSortType = createAction<{sortTypeName: string}>(Actions.changeSortType);
export const sortCityOffers = createAction(Actions.sortCityOffers);
