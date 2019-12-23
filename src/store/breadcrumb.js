export const breadcrumb = {
  namespaced: true,
  state: {
    breadcrumbs: [],
  },
  getters: {
    breadcrumbs: state => state.breadcrumbs,
  },
  mutations: {
    setBreadcrumbs: (state, breadcrumbs) => state.breadcrumbs = breadcrumbs,
  },
}