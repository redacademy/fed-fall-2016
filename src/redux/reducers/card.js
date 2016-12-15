import {
    CARD_TO_POSITION_DIRECTIONS,
    CARD_TO_POSITION_FULL,
    CARD_TO_POSITION_HIDDEN,
    CARD_TO_POSITION_HALF,
    LOCATION_ADD_BUTTON_SWITCH,
    LOCATION_ADD_LOAD,
    LOCATION_FILTER_LOAD,
    LOCATION_LIST_LOAD,
    LOCATION_RATE_LOAD,
    //TODO: Add following to ../actions
    // LOCATION_RATE_LOAD,
    LOCATION_VIEW_LOAD,
    // USER_LOCATION_LIST_LOAD,
} from '../actions'

const initialState = {
    cardPosition: 340,
    selectedCard: '',
    history: [],
    cardVisible: false,
    placeid: '',
    locationList: {},
    locationAdd: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CARD_TO_POSITION_FULL:
            return { ...state, cardPosition: 0, cardVisible: true }
        case CARD_TO_POSITION_HALF:
            return { ...state, cardPosition: 340, cardVisible: true }
        case CARD_TO_POSITION_DIRECTIONS:
            return { ...state, cardPosition: 420, cardVisible: true }
        case CARD_TO_POSITION_HIDDEN:
            return { ...state, cardPosition: 700, cardVisible: false, placeid: '' } //, history: history.pop() }   //? or should this be on the individual screens as they exit?
        case LOCATION_ADD_BUTTON_SWITCH:
            return {...state, locationAdd: action.payload }
        case LOCATION_ADD_LOAD:
            return {...state, selectedCard: 'LocationAdd' } //, placeid: action.payload ? //, history: history.concat('LocationAdd') }
        case LOCATION_FILTER_LOAD:
            return {...state, selectedCard: 'LocationFilter' } //, history: history.concat('LocationFilter') }
        case LOCATION_LIST_LOAD:
            return {...state, selectedCard: 'LocationList', locationList: action.payload } //, history: history.concat('LocationList') }
        case LOCATION_RATE_LOAD:
            return {...state, selectedCard: 'LocationRating', placeid: action.payload } //, history: history.concat('LocationRate') }
        case LOCATION_VIEW_LOAD:
            return {...state, selectedCard: 'LocationPreview', placeid: action.payload } //, history: history.concat('LocationPreview') }
        // case USER_LOCATION_LIST_LOAD:
        //     return {...state, selectedCard: 'UserLocationList', locationList: action.payload}
        default:
            return state
    }
}
