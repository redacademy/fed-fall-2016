import {
    ENTER_PREVIEW,
    EXIT_PREVIEW,
    ENTER_LOCATION_ADD,
    EXIT_LOCATION_ADD
} from '../actions'

const initialState = {
    preview: false,
    locationAdd: false,
    placeid: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_PREVIEW:
            return { preview: true, placeid: action.payload }
        case EXIT_PREVIEW:
            return { preview: false, placeid: '' }
        case ENTER_LOCATION_ADD:
            return {...state, locationAdd: true }
        case EXIT_LOCATION_ADD:
            return {...state, locationAdd: false }
        default:
            return state
    }
}