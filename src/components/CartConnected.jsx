import React from "react";
import { connect } from "react-redux";

import {
  getTotalPriceSelector,
  getSelectedProductsSelector,
} from "../store/selectors/products.selectors";
import Cart from "./Cart";

function CartConnected({ selected, totalPrice }) {
  const totalProducts = Object.values(selected).reduce(
    (total, products) => total + products,
    0
  );

  return <Cart totalPrice={totalPrice} totalProducts={totalProducts} />;
}

const mapStateToProps = (state) => ({
  totalPrice: getTotalPriceSelector(state),
  selected: getSelectedProductsSelector(state),
});

export default connect(mapStateToProps)(CartConnected);
