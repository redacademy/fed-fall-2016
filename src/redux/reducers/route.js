import { ROUTE_SET } from '../actions'

export default (route = 'login', action) => {
  switch (action.type) {
    case ROUTE_SET:
      return action.payload.route
    default:
      return route
  }
}