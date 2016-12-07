import { GOT_ALL_LOCATION_DATA } from '../actions'

const initialState = {
    generatedLocationData: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GOT_ALL_LOCATION_DATA: 
            console.log("payload", action.payload)
            return { generatedLocationData: action.payload }
        default:
            return state
    }
}

