import { 
    LOCATION_DATA_DETAILS, 
    LOCATION_DATA_ALL, 
    LOCATION_ISLOADING_RESET
} from '../actions'

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
            return {...state, isLoading: false, locationDetails: action.payload.results[0] } 
        case LOCATION_ISLOADING_RESET:
            return {...state, isLoading: true }
        default:
            return state
    }
}

