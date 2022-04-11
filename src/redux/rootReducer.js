import { combineReducers } from 'redux';
import cartReducer from './reducers/cart/cart.reducer';

export default combineReducers({
  cart: cartReducer,
});
