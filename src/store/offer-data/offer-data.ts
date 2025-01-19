import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortTypeName } from '../../const';
import { OfferData } from '../../types/state';
import { fetchCommentsByIdAction, fetchNearbyOffersByIdAction, fetchOfferByIdAction, fetchOffersAction } from '../api-actions';
import { getCitiesInfo, getCityByName, getOffersByCity, sortCityOffersByType } from '../../city-selection-logic';
import { Offer, OfferById } from '../../types/offer';
import { UserComment } from '../../types/comment';

const initialState: OfferData = {
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

export const offerData = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = getCityByName(state.cities, action.payload);
    },
    changeSortType: (state, action: PayloadAction<SortTypeName>) => {
      state.sortType = action.payload;
    },
    sortCityOffers: (state) => {
      state.offersByCity = sortCityOffersByType(state.offersByCity, state.offersByCityDefaultSort, state.sortType);
    },
    loadCityOffers: (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.city.name);
      state.offersByCityDefaultSort = state.offersByCity;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.offers = action.payload;
        state.cities = getCitiesInfo(state.offers);
        state.city = state.cities[0];
        state.offersByCity = getOffersByCity(state.offers, state.city.name);
        state.offersByCityDefaultSort = state.offersByCity;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action: PayloadAction<OfferById>) => {
        state.offerById = action.payload;
      })
      .addCase(fetchNearbyOffersByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersByIdAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchCommentsByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchCommentsByIdAction.fulfilled, (state, action: PayloadAction<UserComment[]>) => {
        state.comments = action.payload;
      });
  }
});

export const {changeCity, changeSortType, sortCityOffers, loadCityOffers} = offerData.actions;
