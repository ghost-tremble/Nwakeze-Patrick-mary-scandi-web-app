import {
  applyMiddleware,
  createStore,
} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

const middlewares = [logger, thunk]; //middlewares

// apply logger and redux-thunl

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
export const savedStore = persistStore(store);
