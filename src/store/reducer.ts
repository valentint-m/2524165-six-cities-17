import { createReducer } from '@reduxjs/toolkit';
import { SortTypeName } from '../const';
import { changeCity, changeSortType, loadOffers, sortCityOffers, loadCityOffers, setOffersDataLoadingStatus, loadNearbyOffers, loadComments, loadOfferById } from './actions';
import { getCitiesInfo, getCityByName, getOffersByCity, sortCityOffersByType } from '../city-selection-logic';
import { City, Offer, OfferById } from '../types/offer';
import { UserComment } from '../types/comment';

type State = {
  city: City;
  offers: Offer[];
  offerById: OfferById;
  offersByCity: Offer[];
  offersByCityDefaultSort: Offer[];
  offersNearby: Offer[];
  comments: UserComment[];
  cities: City[];
  sortType: string;
  isOffersDataLoading: boolean;
}

const initialState: State = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 8
    }
  },
  offers: [],
  offerById: {
    id: '',
    title: '',
    type: '',
    price: 0,
    previewImage: '',
    city: {
      name: '',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    description: '',
    bedrooms: 0,
    goods: [''],
    host: {
      name: '',
      avatarURL: '',
      isPro: false,
    },
    images: [''],
    maxAdults: 0
  },
  offersByCity: [],
  offersByCityDefaultSort: [],
  offersNearby: [],
  comments: [],
  cities: [],
  isOffersDataLoading: false,
  sortType: SortTypeName.Popular,
};

const reducer = createReducer (initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = getCityByName(state.cities, action.payload.cityName);
  })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.cities = getCitiesInfo(state.offers);
      state.city = state.cities[0];
      state.offersByCity = getOffersByCity(state.offers, state.city.name);
      state.offersByCityDefaultSort = state.offersByCity;
    })
    .addCase(loadCityOffers, (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.city.name);
      state.offersByCityDefaultSort = state.offersByCity;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.sortTypeName;
    })
    .addCase(sortCityOffers, (state) => {
      state.offersByCity = sortCityOffersByType(state.offersByCity, state.offersByCityDefaultSort, state.sortType);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offerById = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export { reducer };

