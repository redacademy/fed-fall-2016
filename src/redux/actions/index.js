// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
export const ENTER_PREVIEW = 'PREVIEW'
export const EXIT_PREVIEW = 'EXIT_PREVIEW'

// Action creators here
export const searchTextChange = (text) => {
    return {
        type: ON_SEARCH_CHANGE,
        payload: text
    }
}

export const enterPreview = () => {
    return {
        type: ENTER_PREVIEW
    }
}

export const exitPreview = () => {
    return {
        type: EXIT_PREVIEW
    }
}

// Thunks down here