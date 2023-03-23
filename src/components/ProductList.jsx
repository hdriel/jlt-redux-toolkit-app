import React, { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { connect, useDispatch } from "react-redux";

import Product from "./Product";
import {
  getErrorMsgProductsSelector,
  getIsLoadingProductsSelector,
  getProductsSelector,
  getSelectedProductsSelector,
} from "../store/selectors/products.selectors";
import { fetchProductList } from "../logic/products.logic";
import { dispatch } from "../store/store";
import { fetchProductsAsyncAction } from "../store/AsyncActions/products.thunk";

function ProductList({
  isLoading,
  error,
  products,
  selectedProducts,
  onAdd,
  onRemove,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) dispatch(fetchProductsAsyncAction());
  }, []);

  return (
    <div className="product-list-container">
      {isLoading && <PacmanLoader color="#36d7b7" />}
      {!isLoading &&
        !error &&
        products?.map((product) => (
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

const mapStateToProps = (state, props) => ({
  isLoading: getIsLoadingProductsSelector(state),
  error: getErrorMsgProductsSelector(state),
  products: getProductsSelector(state, props),
  selectedProducts: getSelectedProductsSelector(state),
});

export default connect(mapStateToProps)(ProductList);
