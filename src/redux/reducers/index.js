import { combineReducers } from 'redux'
import InputReducer from './input'
import ButtonReducer from './button'
import MapReducer from './map'
import CardReducer from './card'

const rootReducer = combineReducers({
    input: InputReducer,
    button: ButtonReducer,
    map: MapReducer,
    card: CardReducer,
})

export default rootReducer
