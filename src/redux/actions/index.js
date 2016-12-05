// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE';

// Action creators here
export const searchTextChange = (text) => {
    return {
        type: ON_SEARCH_CHANGE,
        payload: text
    }
}

// Thunks down here