import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute } from '../const';
import { FavoriteOfferPost, Offer, OfferById } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { getOfferUrlById, getCommentsUrlById, getNearbyOffersUrlById, getOfferFavoriteStatusUrl } from '../utils';
import { UserComment, UserCommentPost } from '../types/comment';
import { store } from '.';

export const fetchOfferByIdAction = createAsyncThunk<OfferById, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferById>(getOfferUrlById(offerId));
    return data;
  }
);

export const fetchCommentsByIdAction = createAsyncThunk<UserComment[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<UserComment[]>(getCommentsUrlById(offerId));
    return data;
  }
);

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    return data;
  },
);

export const fetchNearbyOffersByIdAction = createAsyncThunk<Offer[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(getNearbyOffersUrlById(offerId));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(ApiRoute.Login);
    return data.email;
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    store.dispatch(fetchOffersAction());
    return data.email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    store.dispatch(fetchOffersAction());
  },
);

export const postCommentAction = createAsyncThunk<void, UserCommentPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({offerId, comment, rating}, {extra: api}) => {
    await api.post<UserComment>(getCommentsUrlById(offerId), {comment, rating});
    store.dispatch(fetchCommentsByIdAction(offerId));
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Favorite);
    return data;
  },
);

export const changeOfferFavoriteStatusAction = createAsyncThunk<void, FavoriteOfferPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeOfferFavoriteStatus',
  async ({offerId, status}, {extra: api}) => {
    const convertedStatus = status ? 0 : 1;
    await api.post<Offer>(getOfferFavoriteStatusUrl(offerId, convertedStatus));
    store.dispatch(fetchOffersAction());
    store.dispatch(fetchFavoriteOffersAction());
    store.dispatch(fetchOfferByIdAction(offerId));
  },
);
