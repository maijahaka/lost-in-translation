const userReducer = (state = window.localStorage.getItem('user'), action) => {
  switch (action.type) {
    case 'LOGIN':
      window.localStorage.setItem('user', 'redux user')
      return 'redux user'
    case 'LOGOUT':
      window.localStorage.removeItem('user')
      return null
    default:
      return state
  }
}

export default userReducer