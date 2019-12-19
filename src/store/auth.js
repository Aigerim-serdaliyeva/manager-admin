import axios from "axios"
// const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const auth = {
  namespaced: true,
  state: {
    token: null
  },
  getters: {
    isAuthenticated: state => !!state.token
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = null
    }
  },
  actions: {
    async login({commit, dispatch}, formData) {
      try {
        const {token} = axios.$post('./login', formData)
        // console.log('token', token)
        dispatch('setToken', token)
      } catch (e) {
        commit('setError', e, {root: true})
        throw e
      }
    },
    setToken({commit}, token) {
      commit('setToken', token)
    },
    logout({commit}) {
      commit('clearToken')
    }
  }
}