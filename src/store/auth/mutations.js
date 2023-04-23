export const setToken = (state, token) => {
  window.localStorage.setItem('token', token)
  state.token = token
}

export const logout = (state) => {
  window.localStorage.removeItem('token')
  state.token = null
}
