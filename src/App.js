import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { Header, ProductList } from "./components";
import {
  getProductsSelector,
  getSelectedProductsSelector,
} from "./store/selectors/products.selectors";
import {
  addProductToCartAction,
  addProductToCartAsyncAction,
  removeProductFromCartAction,
} from "./store/actions/products.actions";
import { getUsernameSelector } from "./store/selectors/users.selectors";
import { updateUsernameAction } from "./store/actions/users.actions";

function App({
  products,
  selected,
  username,
  addProductToCart,
  removeProductFromCart,
}) {
  // Hide to compare with alternative of mapStateToProps
  // const { products, selected } = useSelector((state) => ({
  //   products: getProductsSelector(state),
  //   selected: getSelectedProductsSelector(state),
  // }));

  // Hide to compare with alternative of mapDispatchToProps
  // const dispatch = useDispatch();//
  // const addProductToCart = (productId) => {
  //   dispatch(addProductToCartAction(productId));
  // };
  // const removeProductFromCart = (productId) => {
  //   dispatch(removeProductFromCartAction(productId));
  // };

  return (
    <div className="app-container">
      <Header title={"Redux App Store | user: " + username} />
      <ProductList
        products={products}
        selectedProducts={selected}
        onAdd={addProductToCart}
        onRemove={removeProductFromCart}
      />
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  products: getProductsSelector(state),
  selected: getSelectedProductsSelector(state),
  username: getUsernameSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (productId) => {
    dispatch(addProductToCartAsyncAction(productId));
    dispatch(updateUsernameAction("Afek"));
  },
  removeProductFromCart: (productId) => {
    dispatch(removeProductFromCartAction(productId));
    dispatch(updateUsernameAction("Hadriel"));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
