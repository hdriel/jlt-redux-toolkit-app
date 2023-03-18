export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

function sleep(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

export const initProductsListAction = (products) => {
  return { type: INIT_PRODUCTS, data: products };
};

export const addProductToCartAction = (productId) => {
  return { type: ADD_TO_CART, productId };
};

export const addProductToCartAsyncAction = (productId) => {
  return async (dispatch, getState) => {
    // const state = getState();
    // const selected = getSelectedProductsSelector(state);
    // console.log("addProductToCartAsyncAction selected", selected);
    await sleep(1000);
    dispatch(addProductToCartAction(productId));
  };
};

export const removeProductFromCartAction = (productId) => {
  return { type: DELETE_FROM_CART, productId };
};
