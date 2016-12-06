// Action type declarations here
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
export const ENTER_PREVIEW = 'ENTER_PREVIEW'
export const EXIT_PREVIEW = 'EXIT_PREVIEW'
export const GOT_ALL_LOCATION_DATA = 'GOT_ALL_LOCATION_DATA'

// Action creators here
export const searchTextChange = (text) => ({
  type: ON_SEARCH_CHANGE,
  payload: text,
})

export const enterPreview = () => ({
  type: ENTER_PREVIEW,
})

export const exitPreview = () => ({
  type: EXIT_PREVIEW,
})

// Thunks down here

export const generateMapPins = () => {
  return function(dispatch){
    fetch('http://45.55.2.200/api/location', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
    .then((mapData) => {
      // console.log('worked')
      mapData.json().then(mapData => {
        dispatch({ type: 'GOT_ALL_LOCATION_DATA', payload: mapData })
      })
    })
  }
    
}
