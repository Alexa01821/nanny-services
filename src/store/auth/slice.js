import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: reducer,
});

export const { getUser, logOut, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
