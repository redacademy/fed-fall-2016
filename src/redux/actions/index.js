// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
export const ENTER_PREVIEW = 'ENTER_PREVIEW'
export const EXIT_PREVIEW = 'EXIT_PREVIEW'
export const LOCATION_DATA_ALL = 'LOCATION_DATA_ALL'
export const LOCATION_DATA_DETAILS = 'LOCATION_DATA_DETAILS'
export const ENTER_LOCATION_ADD = 'ENTER_LOCATION_ADD'
export const EXIT_LOCATION_ADD = 'EXIT_LOCATION_ADD'
export const CARD_TO_POSITION_FULL = 'CARD_TO_POSITION_FULL'
export const CARD_TO_POSITION_HALF = 'CARD_TO_POSITION_HALF'
export const CARD_TO_POSITION_DIRECTIONS = 'CARD_TO_POSITION_DIRECTIONS'
export const CARD_TO_POSITION_HIDDEN = 'CARD_TO_POSITION_HIDDEN'

// Action creators here
export const searchTextChange = (text) => ({
    type: ON_SEARCH_CHANGE,
    payload: text,
})

export const enterPreview = (placeId) => ({
  type: ENTER_PREVIEW,
  payload: placeId,
})

export const exitPreview = () => ({
    type: EXIT_PREVIEW,
})


export const setCardPosition = (position) => {
  switch(position){
    case 'full': 
      return { type: CARD_TO_POSITION_FULL }
    case 'half':
      return { type: CARD_TO_POSITION_HALF }
    case 'directions':
      return { type: CARD_TO_POSITION_DIRECTIONS }
    case 'hidden': 
      return { type: CARD_TO_POSITION_HIDDEN }
    default: 
      return null
  }
}

// Thunks down here
export const generateMapPins = () => {
  return function (dispatch) {
    fetch('http://45.55.2.200/api/location', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(mapData => dispatch({ type: 'LOCATION_DATA_ALL', payload: mapData }))
  }
}

export const getLocationDetails = (placeId) => {
  return function (dispatch) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(locationDetails => dispatch({ type: 'LOCATION_DATA_DETAILS', payload: locationDetails }))
  }
}