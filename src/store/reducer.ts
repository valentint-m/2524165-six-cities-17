import { createReducer } from '@reduxjs/toolkit';
import { SortTypeName } from '../const';
import { changeCity, changeSortType, loadCityOffers, sortCityOffers } from './actions';
import { getCityByName, getOffersByCity, sortCityOffersByType } from '../city-selection-logic';
import { City, Offer } from '../types/offer';

type State = {
  city: City;
  offers: Offer[];
  offersByCity: Offer[];
  offersByCityDefaultSort: Offer[];
  sortType: string;
}

const initialState: State = {
  city: {
    title: CityName.Paris,
    location: {
      lat: 52.35514938496378,
      lng: 4.673877537499948,
      zoom: 8
    }
  },
  offers: Offers,
  offersByCity: Offers.slice(0, 4),
  offersByCityDefaultSort: Offers.slice(0, 4),
  sortType: SortTypeName.Popular,
};

const reducer = createReducer (initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = getCityByName(CityInfo, action.payload.cityName);
  })
    .addCase(loadCityOffers, (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.city.title);
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.sortTypeName;
    })
    .addCase(sortCityOffers, (state) => {
      state.offersByCity = sortCityOffersByType(state.offersByCity, state.offersByCityDefaultSort, state.sortType);
    });
});

export { reducer };

