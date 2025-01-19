import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute } from '../const';
import { loadComments } from './actions';
import { Offer, OfferById } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { getOfferUrlById, getCommentsUrlById, getNearbyOffersUrlById } from '../utils';
import { UserComment, UserCommentPost } from '../types/comment';

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
  'data/fetchOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(getNearbyOffersUrlById(offerId));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(ApiRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
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
  },
);

export const postCommentAction = createAsyncThunk<void, UserCommentPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    await api.post<UserComment>(getCommentsUrlById(offerId), {comment, rating});
    const {data} = await api.get<UserComment[]>(getCommentsUrlById(offerId));
    dispatch(loadComments(data));
  },
);
