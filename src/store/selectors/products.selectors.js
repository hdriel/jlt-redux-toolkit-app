import { createSelector } from "@reduxjs/toolkit";

export const getProductsSelector = createSelector(
  [
    (state) => state.products.productList,
    (state, { excludeIds }) => excludeIds,
  ],
  (productList, excludeIds) => {
    return productList.filter((p) => !excludeIds?.includes(p.id)) ?? [];
  }
);

// export const getProductsSelector = createSelector(
//   (state) => state.products.productList,
//   (productList) => productList
// );

export const getSelectedProductsSelector = createSelector(
  (state) => state.products.selected,
  (selected) => selected ?? {}
);

export const getTotalPriceSelector = createSelector(
  (state) => state.products.totalPrice,
  (price) => price
);

export const getIsLoadingProductsSelector = createSelector(
  (state) => state.products.isLoading,
  (value) => value ?? false
);

export const getErrorMsgProductsSelector = createSelector(
  (state) => state.products.errorMsg,
  (value) => value ?? ""
);
