import { ENTER_PREVIEW, EXIT_PREVIEW } from '../actions'

const initialState = {
    preview: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_PREVIEW:
            return { preview: true }
        case EXIT_PREVIEW:
            return { preview: false }
        default:
            return state
    }
}