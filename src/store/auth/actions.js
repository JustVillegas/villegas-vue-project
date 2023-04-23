export const setToken = ({ commit }, token) => {
  commit('setToken', token)
}

export const logout = ({ commit }) => {
  commit('logout')
}
