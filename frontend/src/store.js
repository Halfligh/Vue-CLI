import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
    username: "",
  },
  mutations: {
    SET_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      state.username = payload.username;
    },
  },
  actions: {
    login({ commit }, username) {
      commit("SET_LOGGED_IN", { isLoggedIn: true, username });
    },
    logout({ commit }) {
      commit("SET_LOGGED_IN", { isLoggedIn: false, username: "" });
    },
  },
});
