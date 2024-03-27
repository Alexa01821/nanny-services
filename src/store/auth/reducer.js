const reducer = {
  getUser(state, action) {
    state.user.id = action.payload.id;
    state.token = action.payload.token;
    state.user.email = action.payload.email;
    state.user.name = action.payload.name;
    state.isLoggedIn = true;

    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("name", action.payload.name);
  },
  logOut(state, action) {
    state.user.id = "";
    state.token = "";
    state.user.email = "";
    state.isLoggedIn = false;
    state.isRefreshing = false;
    localStorage.removeItem("token");
  },
  refreshUser(state, action) {
    state.isRefreshing = true;
    state.isLoggedIn = true;
    state.token = localStorage.getItem("token");
    state.user.name = localStorage.getItem("name");
  },
};

export default reducer;
