import {
  applyMiddleware,
  createStore,
} from 'redux';
import { rootReducer } from './reducers/rootReducer';

import logger from 'redux-logger';

const middlewares = [logger]; //middlewares

// apply logger and redux-thunl

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
