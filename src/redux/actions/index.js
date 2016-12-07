// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
export const ENTER_PREVIEW = 'ENTER_PREVIEW'
export const EXIT_PREVIEW = 'EXIT_PREVIEW'
export const ENTER_LOCATION_ADD = 'ENTER_LOCATION_ADD'
export const EXIT_LOCATION_ADD = 'EXIT_LOCATION_ADD'
export const GOT_ALL_LOCATION_DATA = 'GOT_ALL_LOCATION_DATA'
export const GOT_LOCATION_DETAILS = 'GOT_LOCATION_DETAILS'
// Action creators here
export const searchTextChange = (text) => ({
    type: ON_SEARCH_CHANGE,
    payload: text,
})

export const enterPreview = (placeid) => ({
  type: ENTER_PREVIEW,
  payload: placeid
})

export const exitPreview = () => ({
    type: EXIT_PREVIEW,
})

export const enterLocationAdd = () => ({
    type: ENTER_LOCATION_ADD,
})

export const exitLocationAdd = () => ({
    type: EXIT_LOCATION_ADD,
})

export const generateMapPins = () => {
  return function (dispatch) {
    fetch('http://45.55.2.200/api/location', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then((mapData) => {
        // console.log('worked')
        mapData.json().then(mapData => {
          dispatch({ type: GOT_ALL_LOCATION_DATA, payload: mapData })
        })
      })
  }

}

export const getLocationDetails = (placeId) => {
  return function (dispatch) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
    .then((locationDetails) => {
      locationDetails.json().then(locationDetails => {
        console.log("details", locationDetails)
        dispatch({ type: GOT_LOCATION_DETAILS, payload: locationDetails })
      })
    })

  }
}
