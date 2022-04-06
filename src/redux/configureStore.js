import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  mission: missionReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;
