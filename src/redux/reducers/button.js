import { ON_PIN_PUSH } from '../actions'

const initialState = {
    pushed: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case ON_PIN_PUSH:
            return {...state, pushed: true}
        default: 
            return state
    }
}