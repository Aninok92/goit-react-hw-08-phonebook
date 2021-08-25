import { createSlice } from "@reduxjs/toolkit";
import userOperations from "./users-operations";

const initialState = {
  user: { name: null, email: null, passwor: null },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [userOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [userOperations.fetchCurrentUser.fulfilled](
      { user, isLoggedIn },
      { payload }
    ) {
      user = payload;
      isLoggedIn = true;
    },
  },
});

export default userSlice.reducer;
