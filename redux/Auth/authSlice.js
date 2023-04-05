import { createSlice } from "@reduxjs/toolkit";
import {
  registerNewUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from "./authOperation";

const initialState = {
  userName: "",
  uid: "",
  avatar: "",
  userEmail: "",
  isLoading: false,
  error: null,
  isLogin: false,
};

const statusProgress = (state, action) => {
  state.isLoading = true;
};

const statusError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUser.pending, (state) => {
        statusProgress(state);
      })
      .addCase(registerNewUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.userEmail = payload.email;
        state.isLogin = true
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        statusError(state, action);
      })
      .addCase(logInUser.pending, (state) => {
        statusProgress(state);
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userEmail = action.payload;
        state.isLogin = true
      })
      .addCase(logInUser.rejected, (state, action) => {
        statusError(state, action);
      })
      .addCase(logOutUser.pending, (state) => {
        statusProgress(state);
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.userName = "";
        state.accesstoken = null;
        state.refreshToken = null;
        state.avatar = "";
        state.userEmail = "";
        state.isLoading = false;
        state.error = null;
        state.isLogin = false

      })
      .addCase(logOutUser.rejected, (state, action) => {
        statusError(state, action);
      })
      .addCase(getCurrentUser.pending, (state) => {
        statusProgress(state);
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.uid = payload.uid;
        state.avatar = payload.photo;
        state.userName = payload.name;
        state.isLoading = false;
        state.error = null;
        state.userEmail = payload.email;
        state.isLogin = true

      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
