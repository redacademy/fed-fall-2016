import { 
    CARD_TO_POSITION_DIRECTIONS,
    CARD_TO_POSITION_FULL,
    CARD_TO_POSITION_HIDDEN,
    CARD_TO_POSITION_HALF,
    LOCATION_ADD_LOAD,
    LOCATION_ADD_EXIT,

    //TODO: Add following to ../actions
    // LOCATION_LIST_LOAD,
    // LOCATION_LIST_EXIT,
    LOCATION_FILTER_LOAD,
    LOCATION_FILTER_EXIT,
    // LOCATION_RATE_LOAD,
    // LOCATION_RATE_EXIT,
    // LOCATION_VIEW_LOAD,
    // LOCATION_VIEW_EXIT,
    // USER_LOCATION_LIST_LOAD,
    // USER_LOCATION_LIST_EXIT,
} from '../actions'

const initialState = {
    cardPosition: 340,
    locationAdd: false,
    // locationList: false,
    // locationFilter: false,
    // locationRate: false,
    // locationView: false,
    // userLocationList: false,
    // placeid: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CARD_TO_POSITION_FULL:
            return { cardPosition: 0 }
        case CARD_TO_POSITION_HALF:
            return { cardPosition: 340 }
        case CARD_TO_POSITION_DIRECTIONS:
            return { cardPosition: 500 }
        case CARD_TO_POSITION_HIDDEN:    
            return { cardPosition: 700 }      

        // case LOCATION_LIST_LOAD:
        //     return {...state, locationList: true }
        // case LOCATION_LIST_EXIT:
        //     return {...state, locationList: false }
        // case LOCATION_FILTER_LOAD:
        //     return {...state, locationFilter: true }
        // case LOCATION_FILTER_EXIT:
        //     return {...state, locationFilter: false }
        // case LOCATION_RATE_LOAD:
        //     return {...state, locationRate: true }
        // case LOCATION_RATE_EXIT:
        //     return {...state, locationRate: false }
        // case LOCATION_VIEW_LOAD:
        //     return {...state, locationView: true }
        // case LOCATION_VIEW_EXIT:
        //     return {...state, locationView: false }
        // case USER_LOCATION_LIST_LOAD:
        //     return {...state, userLocationList: true }
        // case USER_LOCATION_LIST_EXIT:
        //     return {...state, userLocationList: false }
        default:
            return state
    }
}
