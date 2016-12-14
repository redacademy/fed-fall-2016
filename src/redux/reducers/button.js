import {
    ENTER_PREVIEW,
    EXIT_PREVIEW,
} from '../actions'

const initialState = {
    preview: false,
    placeid: '',
    scalePin: 0.5
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_PREVIEW:
            return {...state, preview: true, placeid: action.payload, scalePin: 1  }
        case EXIT_PREVIEW:
            return { preview: false, placeid: '', scalePin: 0.5 }
        default:
            return state
    }
}