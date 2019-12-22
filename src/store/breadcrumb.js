export const breadcrumb = {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    getItems: state => state.items,
  },
  mutations: {
    setItems: (state, items) => state.items = items,
  },
  actions: {

  }
}