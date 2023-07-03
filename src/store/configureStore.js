import { configureStore } from '@reduxjs/toolkit';

import client from 'helpers/client/client';
import cardsReducer from './slices/cards';

export default function configureAppStore() {
  return configureStore({
    reducer: {
      cards: cardsReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: client
        }
      })
  });
}
