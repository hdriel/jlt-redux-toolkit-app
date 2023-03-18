import { createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
  name: "users",
  initialState: {
    username: "Hadriel",
  },
  reducers: {
    updateUsername(state, { payload: username }) {
      state.username = username;
    },
  },
});

export const { updateUsername: updateUsernameAction } = useSlice.actions;

export default useSlice;
