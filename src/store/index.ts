import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

const api = createAPI();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
  devTools: true
});
