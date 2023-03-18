import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productSlice from "./slices/product.slice";
import userSlice from "./slices/user.slice";

const reducer = combineReducers({
  products: productSlice.reducer,
  users: userSlice.reducer,
});

export const configureToolkitStore = () => {
  return configureStore({ reducer, devTools: true });
};
