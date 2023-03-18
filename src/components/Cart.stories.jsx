import React from "react";
import Cart from "./Cart";

export default {
  title: "Components/Card",
  component: Cart,
};

export const Empty = () => {
  return <Cart />;
};

export const Full = () => {
  return <Cart totalProducts={2} totalPrice={4} />;
};
