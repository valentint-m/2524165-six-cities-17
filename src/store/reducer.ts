import { createReducer } from '@reduxjs/toolkit';
import { SortTypeName } from '../const';
import { changeCity, changeSortType, loadOffers, sortCityOffers, loadCityOffers, setOffersDataLoadingStatus } from './actions';
import { getCitiesInfo, getCityByName, getOffersByCity, sortCityOffersByType } from '../city-selection-logic';
import { City, Offer } from '../types/offer';

type State = {
  city: City;
  offers: Offer[];
  offersByCity: Offer[];
  offersByCityDefaultSort: Offer[];
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
  offersByCity: [],
  offersByCityDefaultSort: [],
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
    });
});

export { reducer };

