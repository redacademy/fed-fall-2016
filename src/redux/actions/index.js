// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
export const ON_PIN_PUSH = 'ON_PIN_PUSH'

// Action creators here
export const searchTextChange = (text) => {
    return {
        type: ON_SEARCH_CHANGE,
        payload: text
    }
}

export const pinPush = () => {
    return {
        type: ON_PIN_PUSH
    }
}

// Thunks down here