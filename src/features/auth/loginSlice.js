import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "John Doe",
  isLogin: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
    },
  },
});

export const { addUser, logout } = userSlice.actions;
export default userSlice.reducer;
