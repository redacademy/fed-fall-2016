import {
    RATING_CLEAR,
    // RATING_LOAD,
    RATING_QUALITY,
    RATING_CLEAN,
    RATING_NURSING,
    RATING_QUIET,
} from '../actions'

const initialState = {
    quality: 2,
    clean: 2,
    nursing: 2,
    quiet: 2,
    userId: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RATING_CLEAR:
            return {...state, initialState }
        // case RATING_LOAD:
        //     return {...state,  }
        case RATING_QUALITY:
            return {...state, quality: action.payload }
        case RATING_CLEAN:
            return {...state, clean: action.payload }
        case RATING_NURSING:
            return {...state, nursing: action.payload }
        case RATING_QUIET:
            return {...state, quiet: action.payload }
        default:
            return state
    }
}
