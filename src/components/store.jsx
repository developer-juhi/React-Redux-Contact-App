// store.js
import { createStore, combineReducers } from 'redux';
import contactReducer from './contactReducer';
import userReducer from './userReducer';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
  user: userReducer,
  image: imageReducer,

});

const store = createStore(rootReducer);

export default store;