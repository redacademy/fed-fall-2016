import {
    ENTER_PREVIEW,
    EXIT_PREVIEW,
    ENTER_LOCATION_ADD,
    EXIT_LOCATION_ADD,
    ENTER_RATE_LOCATION,
    RATE,
    UNRATE
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
        case RATE:
            console.log('RATE')
            return {...state, [action.payload.prop]: true}
        case UNRATE: 
            console.log('UNRATE')
            return {...state, [action.payload.prop]: false}
        default:
            return state
    }
}