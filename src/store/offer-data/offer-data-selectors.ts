import { NameSpace, SortTypeName } from '../../const';
import { UserComment } from '../../types/comment';
import { City, Offer, OfferById } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.DATA].offers;

export const getOfferById = (state: State): OfferById => state[NameSpace.DATA].offerById;

export const getOffersByCity = (state: State): Offer[] => state[NameSpace.DATA].offersByCity;

export const getOffersNearby = (state: State): Offer[] => state[NameSpace.DATA].offersNearby;

export const getComments = (state: State): UserComment[] => state[NameSpace.DATA].comments;

export const getCity = (state: State): City => state[NameSpace.DATA].city;

export const getCities = (state: State): City[] => state[NameSpace.DATA].cities;

export const getSortTypeName = (state: State): SortTypeName => state[NameSpace.DATA].sortType;

export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.DATA].isOffersDataLoading;
