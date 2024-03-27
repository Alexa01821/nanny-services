import { createSelector } from "@reduxjs/toolkit";
import filtersNannies from "helpers/filtersNannies";
import { selectFilterFavorite } from "store/filters/selector";

export const selectFavorites = (state) => state.favorites.favoriteNanniesData;
export const selectFilteredNanniesFavorite = createSelector(
  [selectFavorites, selectFilterFavorite],
  filtersNannies
);
