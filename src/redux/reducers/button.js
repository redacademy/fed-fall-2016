import { ENTER_PREVIEW, EXIT_PREVIEW } from '../actions'

const initialState = {
    preview: false,
    placeid: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_PREVIEW:
            return { preview: true, placeid: action.payload }
        case EXIT_PREVIEW:
            return { preview: false, placeid: '' }
        default:
            return state
    }
}