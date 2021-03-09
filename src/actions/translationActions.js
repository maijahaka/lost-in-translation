export const saveTranslation = sentence => ({
  type: 'SAVE_TRANSLATION',
  payload: sentence
})

export const clearTranslations = () => ({
  type: 'CLEAR_TRANSLATIONS'
})