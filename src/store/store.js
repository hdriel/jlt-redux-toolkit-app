import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productSlice from "./slices/product.slice";
import userSlice from "./slices/user.slice";

const reducer = combineReducers({
  products: productSlice.reducer,
  users: userSlice.reducer,
});

let store = null;

export const initStore = () => {
  store = configureStore({ reducer, devTools: true });
  return store;
};

export const getState = () => store?.getState();
export const dispatch = (action) => store?.dispatch(action);
