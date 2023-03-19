import React, { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { useDispatch, connect } from "react-redux";

import Product from "./Product";
import { fetchProductsAsyncAction } from "../store/AsyncActions/products.thunk";
import {
  getErrorMsgProductsSelector,
  getIsLoadingProductsSelector,
  getProductsSelector,
  getSelectedProductsSelector,
} from "../store/selectors/products.selectors";

function ProductList({
  isLoading,
  error,
  products,
  selectedProducts,
  onAdd,
  onRemove,
}) {
  const dispatch = useDispatch();
  console.log("ProductList rendered");

  useEffect(() => {
    if (!isLoading) dispatch(fetchProductsAsyncAction());
  }, []);

  return (
    <div className="product-list-container">
      {isLoading && <PacmanLoader color="#36d7b7" />}
      {!isLoading &&
        !error &&
        products.map((product) => (
          <Product
            key={product.id}
            selected={selectedProducts[product.id] ?? 0}
            onAdd={onAdd}
            onRemove={onRemove}
            {...product}
          />
        ))}
      {!isLoading && error && <h1 style={{ color: "red" }}>{error}</h1>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: getIsLoadingProductsSelector(state),
  error: getErrorMsgProductsSelector(state),
  products: getProductsSelector(state),
  selectedProducts: getSelectedProductsSelector(state),
});

export default connect(mapStateToProps)(ProductList);
