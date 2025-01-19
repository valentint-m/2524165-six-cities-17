import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute } from '../const';
import { loadComments, loadNearbyOffers, loadOfferById, loadOffers, setOffersDataLoadingStatus } from './actions';
import { Offer, OfferById } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { getOfferUrlById, getCommentsUrlById, getNearbyOffersUrlById } from '../utils';
import { UserComment, UserCommentPost } from '../types/comment';

export const fetchOfferByIdAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferById>(getOfferUrlById(offerId));
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOfferById(data));
  }
);

export const fetchCommentsByIdAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsById',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<UserComment[]>(getCommentsUrlById(offerId));
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadComments(data));
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchNearbyOffersByIdAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(getNearbyOffersUrlById(offerId));
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadNearbyOffers(data));
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
