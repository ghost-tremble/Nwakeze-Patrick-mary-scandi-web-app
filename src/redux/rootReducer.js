import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import cartReducer from './reducers/cart/cart.reducer';
import currencyReducer from './reducers/currency/currency.reducer';
import inventoryReducer from './reducers/inventory/inventory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
  currency: currencyReducer,
});

export default persistReducer(
  persistConfig,
  rootReducer
);
