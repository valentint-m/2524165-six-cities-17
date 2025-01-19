import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerData } from './offer-data/offer-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.DATA]: offerData.reducer,
  [NameSpace.USER]: userProcess.reducer,
});
