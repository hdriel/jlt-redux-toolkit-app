import React from "react";
import { connect } from "react-redux";

import { Header, ProductList } from "./components";
import {
  addToCartAction,
  deleteFromCartAction,
} from "./store/slices/product.slice";

import { updateUsernameAction } from "./store/slices/user.slice";

function App({ addProductToCart, removeProductFromCart }) {
  return (
    <div className="app-container">
      <Header title={"Redux App Store"} />
      <ProductList onAdd={addProductToCart} onRemove={removeProductFromCart} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (productId) => {
    dispatch(addToCartAction({ productId }));
    dispatch(updateUsernameAction("Afek"));
  },
  removeProductFromCart: (productId) => {
    dispatch(deleteFromCartAction({ productId }));
    dispatch(updateUsernameAction("Hadriel"));
  },
});

export default connect(null, mapDispatchToProps)(App);
