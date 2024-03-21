import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: reducer,
});

export const { filtersNanniesAction, filtersFavoriteNanniesAction } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
