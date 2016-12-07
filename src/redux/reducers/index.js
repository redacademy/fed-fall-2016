import { combineReducers } from 'redux'
import InputReducer from './input'
import ButtonReducer from './button'
import MapReducer from './map'

const rootReducer = combineReducers({
    input: InputReducer,
    button: ButtonReducer,
    map: MapReducer,
})

export default rootReducer
