import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-undef

export const store = createStore(
  combineReducers(
    {},
  ),
  composeEnhancers(applyMiddleware(thunk))
);
