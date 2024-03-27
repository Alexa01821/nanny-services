import { createSelector } from "@reduxjs/toolkit";
import filtersNannies from "helpers/filtersNannies";
import { selectFilters } from "store/filters/selector";

export const selectNannies = (state) => state.nannies.nanniesData;

export const selectFilteredNannies = createSelector(
  [selectNannies, selectFilters],
  filtersNannies
);
