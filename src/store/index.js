export default {
  state: () => ({
    user: {
      name: undefined,
    },
  }),
  getters: {
    userName: (state) => state.user.name,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {},
}
