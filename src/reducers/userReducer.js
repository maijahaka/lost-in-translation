const userReducer = (state = { user: window.localStorage.getItem('user') }, action) => {
  switch (action.type) {
    case 'LOGIN':
      window.localStorage.setItem('user', action.payload)
      return { user: action.payload }
    case 'LOGOUT':
      window.localStorage.removeItem('user')
      return { user: null }
    default:
      return state
  }
}

export default userReducer