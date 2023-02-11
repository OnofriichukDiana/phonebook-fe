import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const changeFilter = createAction("contacts/changeFilter");

axios.defaults.baseURL = "https://phonebook-be.onrender.com/api/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registration = createAsyncThunk(
  "auth/registration",
  async (userInfo) => {
    try {
      const { data } = await axios.post("/users/signup", userInfo);
      token.set(data.data.token);
      return data.data;
    } catch (error) {}
  }
);

export const logIn = createAsyncThunk("auth/logIn", async (userInfo) => {
  try {
    const { data } = await axios.post("/users/login", userInfo);
    token.set(data.data.token);
    return data.data;
  } catch (error) {}
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    await axios.get("/users/logout");
    token.unset();
  } catch (error) {}
});

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(5);
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data.user;
    } catch (error) {}
  }
);
export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (avatar) => {
    try {
      const { data } = await axios.patch("/users/avatars", avatar);
      return data;
    } catch (error) {}
  }
);
