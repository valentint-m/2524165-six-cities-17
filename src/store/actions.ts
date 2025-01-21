import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferById } from '../types/offer';
import { AuthorizationStatus, SortTypeName } from '../const';
import { UserComment } from '../types/comment';

const Actions = {
  changeCity: 'changeCity',
  loadOffers: 'loadOffers',
  loadOfferById: 'loadOfferById',
  loadCityOffers: 'loadCityOffers',
  loadNearbyOffers: 'loadNearbyOffers',
  loadComments: 'loadComments',
  changeSortType: 'changeSortType',
  sortCityOffers: 'sortCityOffers',
  setOffersDataLoadingStatus: 'setOffersDataLoadingStatus',
  requireAuthorization: 'requireAuthorization'
};

export const changeCity = createAction<{cityName: string}>(Actions.changeCity);
export const loadOffers = createAction<Offer[]>(Actions.loadOffers);
export const loadOfferById = createAction<OfferById>(Actions.loadOfferById);
export const loadCityOffers = createAction(Actions.loadCityOffers);
export const loadNearbyOffers = createAction<Offer[]>(Actions.loadNearbyOffers);
export const loadComments = createAction<UserComment[]>(Actions.loadComments);
export const changeSortType = createAction<{sortTypeName: SortTypeName}>(Actions.changeSortType);
export const sortCityOffers = createAction(Actions.sortCityOffers);
export const setOffersDataLoadingStatus = createAction<boolean>(Actions.setOffersDataLoadingStatus);
export const requireAuthorization = createAction<AuthorizationStatus>(Actions.requireAuthorization);
