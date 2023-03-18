export const getProductsSelector = (state) => state.products.productList ?? [];
export const getSelectedProductsSelector = (state) => state.products.selected;
export const getTotalPriceSelector = (state) => state.products.totalPrice;
