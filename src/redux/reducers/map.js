import { LOCATION_DATA_DETAILS, LOCATION_DATA_ALL } from '../actions'

const initialState = {
    generatedLocationData: [],
    locationDetails: {},
    isLoading: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_DATA_ALL:
            return {...state, generatedLocationData: action.payload }
        case LOCATION_DATA_DETAILS:
        console.log(action.payload)
            return {...state, isLoading: false, locationDetails: action.payload } 
        default:
            return state
    }
}

