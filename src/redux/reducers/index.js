import { combineReducers } from 'redux'
import InputReducer from './input'
import ButtonReducer from './button'
import MapReducer from './map'
import CardReducer from './card'
import FilterReducer from './filter'
import RatingReducer from './rating'
import RouteReducer from './route'

const rootReducer = combineReducers({
    input: InputReducer,
    button: ButtonReducer,
    map: MapReducer,
    card: CardReducer,
    filter: FilterReducer,
    rating: RatingReducer,
    route: RouteReducer,
})

export default rootReducer
