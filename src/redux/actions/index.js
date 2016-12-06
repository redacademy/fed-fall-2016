// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
export const ENTER_PREVIEW = 'ENTER_PREVIEW'
export const EXIT_PREVIEW = 'EXIT_PREVIEW'
export const ENTER_LOCATION_ADD = 'ENTER_LOCATION_ADD'
export const EXIT_LOCATION_ADD = 'EXIT_LOCATION_ADD'

// Action creators here
export const searchTextChange = (text) => {
    return {
        type: ON_SEARCH_CHANGE,
        payload: text,
    }
}

export const enterPreview = () => ({
  type: ENTER_PREVIEW,
})

export const exitPreview = () => ({
  type: EXIT_PREVIEW,
})

export const enterLocationAdd = () => ({
  type: ENTER_LOCATION_ADD,
})

export const exitLocationAdd= () => ({
  type: EXIT_LOCATION_ADD,
})

// Thunks down here