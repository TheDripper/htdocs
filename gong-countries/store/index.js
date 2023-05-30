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
  async updateUsers({ commit }, countries) {
    console.log('countries',countries);
    let users = await this.$axios.$get("/api/users.php", {
      params: { countries: countries },
    });
    console.log('users',users);
    // JSON.parse(users);
    commit("setUsers", users);
  },
  async nuxtServerInit({ commit }) {
    const users = await this.$axios.$get("/api/default.php");
    commit("setUsers", users);
  },
};
