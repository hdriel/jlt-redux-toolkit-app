import { createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../consts";

const sleep = (ms) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() * 100 > 50) resolve();
      else reject("failed to fetch!");
    }, ms)
  );

export const fetchProductsAsyncAction = createAsyncThunk(
  "fetch-products",
  async () => {
    await sleep(3 * 1000);
    return PRODUCTS;
  }
);
