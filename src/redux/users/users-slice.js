import { createSlice } from "@reduxjs/toolkit";
import userOperations from "./users-operations";

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
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
    [userOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [userOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [userOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default userSlice.reducer;
