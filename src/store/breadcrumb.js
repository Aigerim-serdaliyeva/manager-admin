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
    pushItem: (state, item) => state.items.push(item),
    popItem: (state) => state.items.pop(),
    replaceItem: (state, payload) => {
        const index = state.items.findIndex((item) => {
          return item.text === payload.find;
        });
        if(index) {
          state.items.splice(index, 1, payload.replace);
        }
    },
    emptyItems: (state) => state.items = []
  },
  actions: {

  }
}