import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reducers from './reducers';
const initialState = {};
const middleware = [thunk];
const store = configureStore(
  {reducer: reducers},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;