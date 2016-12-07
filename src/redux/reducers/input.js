import { ON_SEARCH_CHANGE } from '../actions'

const initialState = {
    searchText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_SEARCH_CHANGE:
            return { searchText: action.payload }
        default:
            return state
    }
}
