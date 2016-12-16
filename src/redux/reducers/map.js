
import {
    LOCATION_DATA_DETAILS,
    LOCATION_DATA_ALL,
    LOCATION_ISLOADING_RESET,
    LOCATION_LIST_DETAILS,
    LOCATION_SET_ADD_LOCATION_COORDS
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
    addLocationCoords: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_DATA_ALL:
            return {...state, generatedLocationData: action.payload }
        case LOCATION_DATA_DETAILS:
            const newList = state.locationList.concat(action.payload.results)
            return {...state, isLoading: false, locationList:  newList}
        case LOCATION_LIST_DETAILS:
            return {...state, isLoadingList: false, locationList: action.payload}
        case LOCATION_ISLOADING_RESET:
            return {...state, isLoading: true, isLoadingList: true, locationList: [] }
        case LOCATION_SET_ADD_LOCATION_COORDS:
          console.log(action.payload);
            return {...state, addLocationCoords: action.payload }
        default:
            return state
    }
}

