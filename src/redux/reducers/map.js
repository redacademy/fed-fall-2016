import { LOCATION_DATA_DETAILS, LOCATION_DATA_ALL } from '../actions'

const initialState = {
    generatedLocationData: [],
    locationDetails: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_DATA_ALL:
            return {...state, generatedLocationData: action.payload }
        case LOCATION_DATA_DETAILS:
            return {...state, locationDetails: action.payload.results[0] } 
        default:
            return state
    }
}

