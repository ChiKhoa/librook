import { configureStore } from "@reduxjs/toolkit";
import focusedReducer from "./focused-slice";
import { useDispatch } from "react-redux";

const authStore = configureStore({
  reducer: {
    focused: focusedReducer,
  },
});

export type AuthState = ReturnType<typeof authStore.getState>;
type AuthDispatch = typeof authStore.dispatch;
export const useAuthDispatch = useDispatch.withTypes<AuthDispatch>();

export default authStore;
