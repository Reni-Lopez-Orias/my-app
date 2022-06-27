import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-auth", //checking, auth
    ui: null,
    email: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredential: (state) => {}
  }
});

export const { login, logout, checkingCredential } = authSlice.reducer;
