import { 
    CARD_TO_POSITION_DIRECTIONS,
    CARD_TO_POSITION_FULL,
    CARD_TO_POSITION_HIDDEN,
    CARD_TO_POSITION_HALF,
 } from '../actions'

const initialState = {
    cardPosition: 340,
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
        default:
            return state
    }
}
