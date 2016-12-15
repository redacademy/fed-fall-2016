
import {
    LOCATION_DATA_DETAILS,
    LOCATION_DATA_ALL,
    LOCATION_ISLOADING_RESET,
    LOCATION_LIST_DETAILS
} from '../actions'

const initialState = {
    generatedLocationData: [],
    locationList: [],
    isLoading: true,
    isLoadingList: true,
    locationDetails: {},
    place: null,
    line1: null,
    line2: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_DATA_ALL:
        console.log('LOCATION DATA ALL ', action.payload)
            return {...state, generatedLocationData: action.payload }
        case LOCATION_DATA_DETAILS:
        console.log('LOCATION DATA DETAILS ', action.payload)
            const newList = state.locationList.concat(action.payload.results)
            return {...state, isLoading: false, locationList:  newList}
        case LOCATION_LIST_DETAILS:
            console.log('LOCATION LIST DETAILS ', action.payload)
            return {...state, isLoadingList: false, locationList: action.payload}
        case LOCATION_ISLOADING_RESET:
        console.log('LOCATION IS LOADING RESET ', action.payload)
            return {...state, isLoading: true, isLoadingList: true, locationList: [] }
        default:
            return state
    }
}

