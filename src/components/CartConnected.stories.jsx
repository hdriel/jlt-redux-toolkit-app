import React from "react";
import { Provider, useDispatch } from "react-redux";

import CartConnected from "./CartConnected";
import { configureToolkitStore } from "../store/store";

import {
  addToCartAction,
  initProductsAction,
} from "../store/slices/product.slice";

export default {
  title: "Components/Card-Connected",
  component: CartConnected,
  decorators: [
    (Story) => (
      <Provider store={configureToolkitStore()}>
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
  dispatch(initProductsAction([{ id: "a", price: 4 }]));
  dispatch(addToCartAction("a"));

  return <CartConnected />;
};
