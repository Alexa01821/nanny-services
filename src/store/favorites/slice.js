import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const favoritesNanniesSlice = createSlice({
  name: "favoritesNannies",
  initialState,
  reducers: reducer,
});

export const { addFavoritesNannies, deleteFavoritesNannies } =
  favoritesNanniesSlice.actions;
export const favoritesNanniesReducer = favoritesNanniesSlice.reducer;
