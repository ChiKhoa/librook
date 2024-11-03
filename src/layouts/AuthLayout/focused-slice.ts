import { createSlice } from "@reduxjs/toolkit";

export interface FocusState {
  value: boolean;
}

const initialState: FocusState = {
  value: false,
};

export const focusedSlice = createSlice({
  name: "focused",
  initialState,
  reducers: {
    focus: (state) => {
      state.value = true;
    },
    blur: (state) => {
      state.value = false;
    },
  },
});

export const { focus, blur } = focusedSlice.actions;

export default focusedSlice.reducer;
