import { persistReducer } from 'redux-persist';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['Product', 'Coupon', 'Order']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);
