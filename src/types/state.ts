import { AuthorizationStatus, SortTypeName } from '../const.js';
import { store } from '../store/index.js';
import { UserComment } from './comment.js';
import { City, Offer, OfferById } from './offer.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OfferData = {
  city: City;
  offers: Offer[];
  offerById: OfferById;
  offersByCity: Offer[];
  offersByCityDefaultSort: Offer[];
  offersNearby: Offer[];
  comments: UserComment[];
  cities: City[];
  sortType: SortTypeName;
  isOffersDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
