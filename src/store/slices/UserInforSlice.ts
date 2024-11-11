import { TTableUser } from "@/types/TablesDBType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserInforState extends Partial<TTableUser> {
  key?: string;
  userInfor?: Partial<TTableUser>;
}

const initialState: IUserInforState = {
  key: "key",
};

export const userInforSlice = createSlice({
  name: "user-infor",
  initialState,
  reducers: {
    setUserInfor: (state, action: PayloadAction<IUserInforState>) => {
      state.userInfor = action.payload;
    },
  },
});

export const { setUserInfor } = userInforSlice.actions;

export default userInforSlice.reducer;
