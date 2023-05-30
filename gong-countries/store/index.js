export const state = () => ({
  users: [],
});

export const getters = {
  users(state) {
    return state.users;
  },
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};

export const actions = {
  async updateUsers({ state }, countries) {
    const users = await this.$axios.$get("/api/filter.php");
    commit('setUsers',users);
  },
  async nuxtServerInit({ commit }) {
    const users = await this.$axios.$get("/api/default.php");
    commit("setUsers", users);
  },
};
