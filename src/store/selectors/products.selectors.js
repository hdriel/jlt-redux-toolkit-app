export const getProductsSelector = (state) => state.products.productList ?? [];
export const getSelectedProductsSelector = (state) => state.products.selected;
export const getTotalPriceSelector = (state) => state.products.totalPrice;
export const getIsLoadingProductsSelector = (state) => {
  return state.products.isLoading ?? false;
};
export const getErrorMsgProductsSelector = (state) => {
  return state.products.errorMsg ?? "";
};
