import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName, NameSpace, SortTypeName } from '../../const';
import { OfferData } from '../../types/state';
import { changeOfferFavoriteStatusAction, fetchCommentsByIdAction, fetchFavoriteOffersAction, fetchNearbyOffersByIdAction, fetchOfferByIdAction, fetchOffersAction, postCommentAction } from '../api-actions';
import { getCitiesInfo, getCityLocationByName, getOffersByCity, sortCityOffersByType } from '../../city-selection-logic';
import { Offer, OfferById } from '../../types/offer';
import { UserComment } from '../../types/comment';
import { sortCommentsByNew } from '../../utils';

const initialState: OfferData = {
  city: {
    name: CityName.Paris,
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
  favoriteOffers: [],
  comments: [],
  cities: [],
  isOffersDataLoading: false,
  sortType: SortTypeName.Popular,
  hasError: false,
};

export const offerData = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {
    setDefaultCity: (state) => {
      if (state.cities.length > 0) {
        state.city.name = CityName.Paris;
        state.city.location = getCityLocationByName(state.cities, state.city.name);
        state.offersByCity = getOffersByCity(state.offers, state.city.name);
        state.offersByCityDefaultSort = state.offersByCity;
      } else {
        state.city.name = CityName.Paris;
      }
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city.name = action.payload;
      state.city.location = getCityLocationByName(state.cities, action.payload);
    },
    changeSortType: (state, action: PayloadAction<SortTypeName>) => {
      state.sortType = action.payload;
    },
    sortCityOffers: (state) => {
      state.offersByCity = sortCityOffersByType(state.offersByCity, state.offersByCityDefaultSort, state.sortType);
    },
    loadCityOffers: (state) => {
      if (state.cities.length > 0) {
        state.offersByCity = getOffersByCity(state.offers, state.city.name);
        state.offersByCityDefaultSort = state.offersByCity;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.offers = action.payload;
        state.cities = getCitiesInfo(state.offers);
        state.offersByCity = getOffersByCity(state.offers, state.city.name);
        state.offersByCityDefaultSort = state.offersByCity;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action: PayloadAction<OfferById>) => {
        state.offerById = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchNearbyOffersByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchNearbyOffersByIdAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.offersNearby = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersByIdAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchCommentsByIdAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCommentsByIdAction.fulfilled, (state, action: PayloadAction<UserComment[]>) => {
        state.comments = action.payload;
        state.comments = sortCommentsByNew(state.comments);
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCommentsByIdAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(postCommentAction.fulfilled, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(changeOfferFavoriteStatusAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(changeOfferFavoriteStatusAction.rejected, (state) => {
        state.hasError = true;
      });
  }
});

export const {setDefaultCity, changeCity, changeSortType, sortCityOffers, loadCityOffers} = offerData.actions;
