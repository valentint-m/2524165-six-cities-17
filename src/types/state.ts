import { AuthorizationStatus, CityName, SortTypeName } from '../const.js';
import { store } from '../store/index.js';
import { UserComment } from './comment.js';
import { Offer, OfferById } from './offer.js';

export type UserProcess = {
  email: string;
  authorizationStatus: AuthorizationStatus;
  isLoggingOut: boolean;
};

export type OfferData = {
  city: CityName;
  offers: Offer[];
  offerById: OfferById;
  offersNearby: Offer[];
  favoriteOffers: Offer[];
  comments: UserComment[];
  sortType: SortTypeName;
  isOffersDataLoading: boolean;
  hasError: boolean;
  isSubmitting: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
