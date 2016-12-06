// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
export const ENTER_PREVIEW = 'ENTER_PREVIEW'
export const EXIT_PREVIEW = 'EXIT_PREVIEW'

// Action creators here
export const searchTextChange = (text) => ({
  type: ON_SEARCH_CHANGE,
  payload: text,
})

export const enterPreview = () => ({
  type: ENTER_PREVIEW,
})

export const exitPreview = () => ({
  type: EXIT_PREVIEW,
})
