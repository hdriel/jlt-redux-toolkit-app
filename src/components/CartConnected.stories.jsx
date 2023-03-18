import React from "react";
import { Provider, useDispatch } from "react-redux";

import CartConnected from "./CartConnected";
import { configureStore } from "../store/store";
import {
  addProductToCartAction,
  initProductsListAction,
} from "../store/actions/products.actions";

export default {
  title: "Components/Card-Connected",
  component: CartConnected,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
};

export const Empty = () => {
  return <CartConnected />;
};

export const Full = () => {
  const dispatch = useDispatch();
  dispatch(initProductsListAction([{ id: "a", price: 4 }]));
  dispatch(addProductToCartAction("a"));

  return <CartConnected />;
};
