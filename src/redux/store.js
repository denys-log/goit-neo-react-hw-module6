import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsSlice from './contactsSlice';
import filtersSlice from './filtersSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['register'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsSlice),
    filters: filtersSlice,
  },
});

export const persistor = persistStore(store);
