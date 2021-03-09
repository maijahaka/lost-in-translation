export const translate = sentence => ({
  type: 'TRANSLATE',
  payload: sentence
})

export const clearTranslations = () => ({
  type: 'CLEAR_TRANSLATIONS'
})