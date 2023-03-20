import { getState, dispatch } from "../store/store";
import { fetchProductsAsyncAction } from "../store/AsyncActions/products.thunk";

export function fetchProductList() {
  return dispatch(fetchProductsAsyncAction());
}

export const updateProduct = (productId, data) => {
  return dispatch(updateProductAsyncAction({ productId, data }));
};
