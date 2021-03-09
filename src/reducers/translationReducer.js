const translationsReducer = (state = JSON.parse(window.localStorage.getItem('sentences')), action) => {
  switch (action.type) {
      case 'SAVE_TRANSLATION':
        if (!state) {
          state = []
        }
        if (state.length === 10) {
          state.shift()
        }
        state.push(action.payload)
        localStorage.setItem('sentences', JSON.stringify(state))
        return state
      case 'CLEAR_TRANSLATIONS':
        window.localStorage.removeItem('sentences')
        return null
      default:
        return state
  }
}

export default translationsReducer