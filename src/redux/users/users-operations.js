import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = "";
  },
};

const register = createAsyncThunk("user/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk("user/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk("user/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.users.token;

    if (persistedToken === null) {
      console.log("Токена нет, уходим из fetchCurrentUser");
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
