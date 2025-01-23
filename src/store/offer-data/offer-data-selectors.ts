import { NameSpace, SortTypeName } from '../../const';
import { UserComment } from '../../types/comment';
import { City, Offer, OfferById } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;

export const getOfferById = (state: State): OfferById => state[NameSpace.Data].offerById;

export const getOffersByCity = (state: State): Offer[] => state[NameSpace.Data].offersByCity;

export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby;

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;

export const getComments = (state: State): UserComment[] => state[NameSpace.Data].comments;

export const getCity = (state: State): City => state[NameSpace.Data].city;

export const getCities = (state: State): City[] => state[NameSpace.Data].cities;

export const getSortTypeName = (state: State): SortTypeName => state[NameSpace.Data].sortType;

export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getSubmittingStatus = (state: State): boolean => state[NameSpace.Data].isSubmitting;

