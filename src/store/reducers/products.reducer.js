import { PRODUCTS } from "../../consts";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INIT_PRODUCTS,
} from "../actions/products.actions";

const initialState = {
  productList: PRODUCTS,
  selected: {},
  totalPrice: 0,
};

export const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return {
        ...state,
        productList: action.data ?? [],
      };

    case ADD_TO_CART: {
      const productId = action.productId;
      const price =
        state.productList.find((p) => p.id === productId)?.price ?? 0;

      const selected = { ...state.selected };
      selected[productId] ||= 0;
      selected[productId]++;
      const totalPrice = parseFloat(
        Number(state.totalPrice + price).toFixed(2)
      );

      return { ...state, selected, totalPrice };
    }
    case DELETE_FROM_CART: {
      const productId = action.productId;
      const price =
        state.productList.find((p) => p.id === productId)?.price ?? 0;

      const totalPrice = parseFloat(
        Number((state.totalPrice -= state.selected[productId] * price)).toFixed(
          2
        )
      );
      const selected = { ...state.selected };
      delete selected[productId];

      return { ...state, selected, totalPrice };
    }

    default:
      return state;
  }
};
