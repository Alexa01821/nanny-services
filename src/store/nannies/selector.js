import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "store/filters/selector";

export const selectNannies = (state) => state.nannies.nanniesData;

export const selectFilteredNannies = createSelector(
  [selectNannies, selectFilters],
  (nannies, filter) => {
    if (filter === "A to Z") {
      return [...nannies].sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === "Z to A") {
      return [...nannies].sort((a, b) => b.name.localeCompare(a.name));
    } else if (filter === "Less than 10$") {
      const filtered = [...nannies].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      if (filtered.some((item) => item.price_per_hour <= 10)) {
        return filtered.filter((item) => item.price_per_hour <= 10);
      } else {
        alert('Price "less than 10$"  was not found');
      }
      return filtered;
    } else if (filter === "Greater than 10$") {
      return [...nannies].sort((a, b) => a.price_per_hour - b.price_per_hour);
    } else if (filter === "Popular") {
      return [...nannies].sort((a, b) => b.rating - a.rating);
    } else if (filter === "Not popular") {
      return [...nannies].sort((a, b) => a.rating - b.rating);
    } else if (filter === "Show all") {
      return [...nannies];
    }
  }
);
