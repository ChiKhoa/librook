import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  isFocus: boolean;
}

const initialState: IAuthState = {
  isFocus: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    focus: (state) => {
      state.isFocus = true;
    },
    blur: (state) => {
      state.isFocus = false;
    },
  },
});

export const { focus, blur } = authSlice.actions;

export default authSlice.reducer;
