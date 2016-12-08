import { GOT_ALL_LOCATION_DATA, GOT_LOCATION_DETAILS } from '../actions'

const initialState = {
    generatedLocationData: [],
    locationDetails: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GOT_ALL_LOCATION_DATA:
            return {...state, generatedLocationData: action.payload }
        case GOT_LOCATION_DETAILS:
            // return {...state, locationDetails: action.payload.results[0] } 
            return {...state, locationDetails: action.payload } 
        default:
            return state
    }
}

