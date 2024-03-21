const reducer = {
  filtersNanniesAction(state, action) {
    state.filtersNannies = action.payload;
  },
  filtersFavoriteNanniesAction(state, action) {
    state.filtersFavoriteNannies = action.payload;
  },
};

export default reducer;
