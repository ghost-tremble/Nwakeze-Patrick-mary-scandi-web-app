import { combineReducers } from 'redux';
import cartReducer from './reducers/cart/cart.reducer';
import inventoryReducer from './reducers/inventory/inventory.reducer';
export default combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
});
