import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countriesReducer from './Countries/countries';

const reducer = combineReducers({
  countries: countriesReducer,
});

const store = configureStore({ reducer });

export default store;
