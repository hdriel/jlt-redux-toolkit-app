import { createSelector } from "@reduxjs/toolkit";

export const getProductsSelector = createSelector(
  (state) => state.products.productList,
  (products) => products ?? []
);

export const getSelectedProductsSelector = createSelector(
  (state) => state.products.selected,
  (value) => value
);

export const getTotalPriceSelector = createSelector(
  (state) => state.products.totalPrice,
  (value) => value
);

export const getIsLoadingProductsSelector = createSelector(
  (state) => state.products.isLoading,
  (value) => value ?? false
);

export const getErrorMsgProductsSelector = createSelector(
  (state) => state.products.errorMsg,
  (value) => value ?? ""
);
