import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: "",
  message: "",
  error: "",
  registering: false,
  registrationError: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
    },
    registerRequest: (state) => {
      state.registering = true;
      state.registrationError = "";
    },
    registerSuccess: (state) => {
      state.registering = false;
      state.registrationError = "";
    },
    registerFailure: (state, action) => {
      state.registering = false;
      state.registrationError = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
