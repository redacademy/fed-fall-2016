import {
    ENTER_PREVIEW,
    EXIT_PREVIEW,
    ENTER_LOCATION_ADD,
    EXIT_LOCATION_ADD,
    ENTER_RATE_LOCATION,
    EXIT_RATE_LOCATION,
    RATE,
    UNRATE,
    RATE_FEEDBACK
} from '../actions'

const initialState = {
    preview: false,
    placeid: '',
    scalePin: 0.5,
    rateLocation: false,
    quality: false,
    cleanliness: false,
    nursingFriendly: false,
    quiet: false,
    feedback: false,
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
        case EXIT_RATE_LOCATION:
            return {...state, rateLocation: false}
        case RATE:
            return {...state, [action.payload.prop]: true}
        case UNRATE: 
            return {...state, [action.payload.prop]: false}
        case RATE_FEEDBACK:
            return {...state, feedback: true}
        default:
            return state
    }
}