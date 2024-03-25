const reducer = {
  addFavoritesNannies(state, { payload }) {
    state.favoriteNanniesData = [...state.favoriteNanniesData, payload];
  },
  deleteFavoritesNannies(state, { payload }) {
    state.favoriteNanniesData = state.favoriteNanniesData.filter(
      (item) => item.name !== payload.name
    );
  },
};

export default reducer;
