import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./reducers/products.reducer";
import { usersReducer } from "./reducers/users.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = combineReducers({
  products: productsReducer,
  users: usersReducer,
});

export const configureStore = () => {
  return createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
};
