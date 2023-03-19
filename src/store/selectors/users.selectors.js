import { createSelector } from "@reduxjs/toolkit";

export const getUsernameSelector = createSelector(
  (state) => state.users.username,
  (value) => value ?? ""
);
