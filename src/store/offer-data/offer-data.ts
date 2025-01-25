import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName, NameSpace, SortTypeName } from '../../const';
import { OfferData } from '../../types/state';
import { changeOfferFavoriteStatusAction, fetchCommentsByIdAction, fetchFavoriteOffersAction, fetchNearbyOffersByIdAction, fetchOfferByIdAction, fetchOffersAction, postCommentAction } from '../api-actions/api-actions';
import { Offer, OfferById } from '../../types/offer';
import { UserComment } from '../../types/comment';

const initialState: OfferData = {
  city: CityName.Paris,
  offers: [],
  offerById: {
    id: '',
    title: '',
    type: '',
    price: 0,
    previewImage: '',
    city: {
      name: CityName.Paris,
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
      avatarUrl: '',
      isPro: false,
    },
    images: [''],
    maxAdults: 0
  },
  offersNearby: [],
  favoriteOffers: [],
  comments: [],
  isOffersDataLoading: false,
  sortType: SortTypeName.Popular,
  hasError: false,
  isSubmitting: false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortTypeName>) => {
      state.sortType = action.payload;
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
      })
      .addCase(fetchNearbyOffersByIdAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchCommentsByIdAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchCommentsByIdAction.fulfilled, (state, action: PayloadAction<UserComment[]>) => {
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByIdAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isSubmitting = true;
        state.hasError = false;
      })
      .addCase(postCommentAction.fulfilled, (state) => {
        state.isSubmitting = false;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isSubmitting = false;
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

export const { changeCity, changeSortType } = offerData.actions;
