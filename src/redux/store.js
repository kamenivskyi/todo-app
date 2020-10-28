import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const middlewares = [];

const initialState = {};

const store = createStore(
  rootReducer, 
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

export default store;