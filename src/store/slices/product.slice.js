import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../consts";

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: PRODUCTS,
    selected: {},
    totalPrice: 0,
  },
  reducers: {
    initProducts(state, action) {
      state.productList = action.payload;
    },
    addToCart(state, { payload: { productId } }) {
      const price =
        state.productList.find((p) => p.id === productId)?.price ?? 0;

      state.selected[productId] ||= 0;
      state.selected[productId]++;

      state.totalPrice = parseFloat(
        Number(state.totalPrice + price).toFixed(2)
      );
    },
    deleteFromCart(state, { payload: { productId } }) {
      const price =
        state.productList.find((p) => p.id === productId)?.price ?? 0;

      state.totalPrice = parseFloat(
        Number((state.totalPrice -= state.selected[productId] * price)).toFixed(
          2
        )
      );

      delete state.selected[productId];
    },
  },
});

export const {
  addToCart: addToCartAction,
  deleteFromCart: deleteFromCartAction,
  initProducts: initProductsAction,
} = productSlice.actions;

export default productSlice;
