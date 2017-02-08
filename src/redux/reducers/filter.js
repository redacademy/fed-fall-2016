import {
    FILTER_CLEAR_VALUES,
    // FILTER_LOAD_FILTERS,
    FILTER_CHANGE_TABLE,
    FILTER_NURSING_ROOM,
    FILTER_MENS_BATHROOM,
    FILTER_WOMENS_BATHROOM,
    FILTER_FAMILY_BATHROOM,
    FILTER_PRIVATE,
    FILTER_STROLLER_ACCESS,
    FILTER_REQUIRES_KEY,
} from '../actions'

const initialState = {
    changeTable: false,
    nursingRoom: false,
    washroomMen: false,
    washroomWomen: false,
    washroomFamily: false,
    private: false,
    strollerAccessible: false,
    keyRequired: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CLEAR_VALUES:
            return {...state, initialState }
        case FILTER_CHANGE_TABLE:
            return {...state, changeTable: action.payload }
        case FILTER_NURSING_ROOM:
            return {...state, nursingRoom: action.payload }
        case FILTER_MENS_BATHROOM:
            return {...state, washroomMen: action.payload }
        case FILTER_WOMENS_BATHROOM:
            return {...state, washroomWomen: action.payload }
        case FILTER_FAMILY_BATHROOM:
            return {...state, washroomFamily: action.payload }
        case FILTER_PRIVATE:
            return {...state, private: action.payload }
        case FILTER_STROLLER_ACCESS:
            return {...state, strollerAccessible: action.payload }
        case FILTER_REQUIRES_KEY:
            return {...state, keyRequired: action.payload }
        default:
            return state
    }
}
