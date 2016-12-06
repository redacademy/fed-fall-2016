import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer, initialState, middleware)

export default store
