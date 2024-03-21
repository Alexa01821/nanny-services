const reducer = {
  getNannies(state, action) {
    state.nanniesData = [...action.payload];
  },
};

export default reducer;
