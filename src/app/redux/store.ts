import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './cardsApi';

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
