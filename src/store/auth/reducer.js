const reducer = {
  getUser(state, action) {
    state.id = action.payload.id;
    state.token = action.payload.token;
    state.email = action.payload.email;
    state.name = action.payload.name;
    state.isLogin = true;

    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("name", action.payload.name);
  },
  logOut(state, action) {
    state.id = "";
    state.token = "";
    state.email = "";
    state.isLogin = false;
    state.isRefreshing = false;
    localStorage.removeItem("token");
  },
  refreshUser(state, action) {
    state.isRefreshing = true;
    state.isLogin = true;
    state.token = localStorage.getItem("token");
    state.name = localStorage.getItem("name");
  },
};

export default reducer;
