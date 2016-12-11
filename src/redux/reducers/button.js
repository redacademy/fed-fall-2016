import {
    ENTER_PREVIEW,
    EXIT_PREVIEW,
    ENTER_LOCATION_ADD,
    EXIT_LOCATION_ADD,
    ENTER_RATE_LOCATION,
} from '../actions'

const initialState = {
    preview: false,
    placeid: '',
    scalePin: 0.5,
    rateLocation: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_PREVIEW:
            return {...state, preview: true, placeid: action.payload, scalePin: 1  }
        case EXIT_PREVIEW:
            return { preview: false, placeid: '', scalePin: 0.5 }
        case ENTER_LOCATION_ADD:
            return {...state, locationAdd: true }
        case EXIT_LOCATION_ADD:
            return {...state, locationAdd: false }
        case ENTER_RATE_LOCATION: 
            return {...state, rateLocation: true}
        default:
            return state
    }
}