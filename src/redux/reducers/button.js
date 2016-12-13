import {
    ENTER_PREVIEW,
    EXIT_PREVIEW,
} from '../actions'

const initialState = {
    preview: false,
    placeId: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_PREVIEW:
            return {...state, preview: true, placeid: action.payload  }
        case EXIT_PREVIEW:
            return { preview: false, placeId: '' }
        default:
            return state
    }
}