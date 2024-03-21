import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: reducer,
});

export const { getNannies, getLoading } = nanniesSlice.actions;
export const nanniesReducer = nanniesSlice.reducer;
