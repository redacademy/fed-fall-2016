import { combineReducers } from 'redux'
import InputReducer from './input'
import ButtonReducer from './button'

const rootReducer = combineReducers({
    input: InputReducer,
    button: ButtonReducer
})

export default rootReducer