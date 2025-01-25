import { NameSpace, SortTypeName } from '../../const';
import { UserComment } from '../../types/comment';
import { City, Offer, OfferById } from '../../types/offer';
import { State } from '../../types/state';
import { findOffersByCity, getCitiesInfo, getCityLocationByName, sortCityOffersByType } from '../../utils/city-selection-logic';
import { sortCommentsByNew } from '../../utils/comment-sort-logic';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;

export const getOfferById = (state: State): OfferById => state[NameSpace.Data].offerById;

export const getOffersByCity = (state: State): Offer[] => {
  const cityOffers = findOffersByCity(state[NameSpace.Data].offers, state[NameSpace.Data].city);
  return sortCityOffersByType(cityOffers, state[NameSpace.Data].sortType);
};

export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby;

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;

export const getComments = (state: State): UserComment[] => {
  const comments = state[NameSpace.Data].comments;
  return sortCommentsByNew(comments);
};

export const getCity = (state: State): City => {
  const city = {
    name: state[NameSpace.Data].city,
    location: getCityLocationByName(state[NameSpace.Data].offers, state[NameSpace.Data].city)
  };

  return city;
};


export const getCities = (state: State): City[] => getCitiesInfo(state[NameSpace.Data].offers);

export const getSortTypeName = (state: State): SortTypeName => state[NameSpace.Data].sortType;

export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getSubmittingStatus = (state: State): boolean => state[NameSpace.Data].isSubmitting;

