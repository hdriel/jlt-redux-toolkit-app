import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchProductsAsyncAction } from "../AsyncActions/products.thunk";

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    selected: {},
    totalPrice: 0,
    isLoading: false,
    errorMsg: "",
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
  extraReducers: ({ addMatcher, addCase }) => {
    addCase(fetchProductsAsyncAction.pending, (state) => {
      state.isLoading = true;
    });

    addMatcher(
      isAnyOf(
        fetchProductsAsyncAction.fulfilled,
        fetchProductsAsyncAction.rejected
      ),
      (state, action) => {
        state.isLoading = false;
        state.productList = action.payload ?? [];
        state.errorMsg = action.error?.message ?? "";
      }
    );
  },
});

export const {
  addToCart: addToCartAction,
  deleteFromCart: deleteFromCartAction,
  initProducts: initProductsAction,
} = productSlice.actions;

export default productSlice;
