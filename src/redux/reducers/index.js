import { combineReducers } from 'redux'
import InputReducer from './input'

const rootReducer = combineReducers({
    input: InputReducer
})

export default rootReducer