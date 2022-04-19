import {
  applyMiddleware,
  createStore,
} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [logger, thunk]; //middlewares

// apply logger and redux-thunl

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
