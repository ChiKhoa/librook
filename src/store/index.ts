import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    authLayout: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type RootDispatch = typeof store.dispatch;
export const useRootDispatch = useDispatch.withTypes<RootDispatch>();

export default store;
