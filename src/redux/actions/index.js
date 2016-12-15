// Action type declarations here
//card
export const CARD_TO_POSITION_FULL = 'CARD_TO_POSITION_FULL'
export const CARD_TO_POSITION_HALF = 'CARD_TO_POSITION_HALF'
export const CARD_TO_POSITION_DIRECTIONS = 'CARD_TO_POSITION_DIRECTIONS'
export const CARD_TO_POSITION_HIDDEN = 'CARD_TO_POSITION_HIDDEN'
//button
export const ENTER_PREVIEW = 'ENTER_PREVIEW'
export const EXIT_PREVIEW = 'EXIT_PREVIEW'
//filter....
export const FILTER_CLEAR_LIST = 'FILTER_CLEAR_LIST'
export const FILTER_CLEAR_VALUES = 'FILTER_CLEAR_VALUES'
// export const FILTER_LOAD_FILTERS = 'FILTER_LOAD_FILTERS'
export const FILTER_CHANGE_TABLE = 'FILTER_CHANGE_TABLE'
export const FILTER_NURSING_ROOM = 'FILTER_NURSING_ROOM'
export const FILTER_MENS_BATHROOM = 'FILTER_MENS_BATHROOM'
export const FILTER_WOMENS_BATHROOM = 'FILTER_WOMENS_BATHROOM'
export const FILTER_FAMILY_BATHROOM = 'FILTER_FAMILY_BATHROOM'
export const FILTER_PRIVATE = 'FILTER_PRIVATE'
export const FILTER_STROLLER_ACCESS = 'FILTER_STROLLER_ACCESS'
export const FILTER_REQUIRES_KEY = 'FILTER_REQUIRES_KEY'
export const FILTER_RETURN_LIST = 'FILTER_RETURN_LIST'
export const FILTER_DISPLAY_AMENITIES = 'FILTER_DISPLAY_AMENITIES'
//location
export const LOCATION_ADD_BUTTON_SWITCH = 'LOCATION_ADD_BUTTON_SWITCH'
export const LOCATION_ADD_LOAD = 'LOCATION_ADD_LOAD'
export const LOCATION_DATA_ALL = 'LOCATION_DATA_ALL'
export const LOCATION_DATA_DETAILS = 'LOCATION_DATA_DETAILS'
export const LOCATION_FILTER_LOAD = 'LOCATION_FILTER_LOAD'
export const LOCATION_LIST_LOAD = 'LOCATION_LIST_LOAD'
export const LOCATION_RATE_LOAD = 'LOCATION_RATE_LOAD'
export const LOCATION_ISLOADING_RESET = 'LOCATION_ISLOADING_RESET'
export const LOCATION_VIEW_LOAD = 'LOCATION_VIEW_LOAD'
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE'
//rating
export const RATING_CLEAR = 'RATING_CLEAR'
// // export const RATING_LOAD = 'RATING_LOAD'
export const RATING_QUALITY = 'RATING_QUALITY'
export const RATING_CLEAN = 'RATING_CLEAN'
export const RATING_NURSING = 'RATING_NURSING'
export const RATING_QUIET = 'RATING_QUIET'

// Action creators here
export const searchTextChange = (text) => ({
    type: ON_SEARCH_CHANGE,
    payload: text,
})

export const enterPreview = (placeid) => ({
    type: ENTER_PREVIEW,
    payload: placeid,
})

export const exitPreview = () => ({
    type: EXIT_PREVIEW,
})

export const locationAddToggleButton = (addLocationButtonSwitch) => ({
    type: LOCATION_ADD_BUTTON_SWITCH,
    payload: addLocationButtonSwitch,
})

export const setCardPosition = (position) => (dispatch) => {
    switch (position) {
        case 'full':
            return dispatch({ type: CARD_TO_POSITION_FULL })
        case 'half':
            return dispatch({ type: CARD_TO_POSITION_HALF })
        case 'directions':
            return dispatch({ type: CARD_TO_POSITION_DIRECTIONS })
        case 'hidden':
            dispatch({ type: LOCATION_ISLOADING_RESET })
            return dispatch({ type: CARD_TO_POSITION_HIDDEN })
        default:
            return null
    }
}

export const setSelectedCard = (card, placeid, locationList) => dispatch => {

    switch (card) {
        case 'LocationAdd':
            dispatch({ type: LOCATION_ADD_LOAD, payload: placeid })
            return dispatch(setCardPosition('full'))
        case 'LocationFilter':
            dispatch({ type: FILTER_CLEAR_VALUES })
            dispatch({ type: LOCATION_FILTER_LOAD })
            return dispatch(setCardPosition('full'))
        case 'LocationList':
            dispatch({ type: LOCATION_LIST_LOAD, payload: locationList })
            return dispatch(setCardPosition('full'))
        case 'LocationPreview':
            dispatch({ type: LOCATION_VIEW_LOAD, payload: placeid })
            return dispatch(setCardPosition('half'))
        case 'LocationRate':
            dispatch({ type: LOCATION_RATE_LOAD, payload: placeid })
            return dispatch(setCardPosition('full'))
        // case 'UserLocationList':
        //   return { type: USER_LOCATION_LIST_LOAD, payload: locationList }
        default:
            return null
    }
}

export const updateFilterValue = (filter, isSelected) => dispatch => {
    switch (filter) {
        case 'baby-change-table':
            return dispatch({ type: FILTER_CHANGE_TABLE, payload: isSelected })
        case 'bottle':
            return dispatch({ type: FILTER_NURSING_ROOM, payload: isSelected })
        case 'male':
            return dispatch({ type: FILTER_MENS_BATHROOM, payload: isSelected })
        case 'female':
            return dispatch({ type: FILTER_WOMENS_BATHROOM, payload: isSelected })
        case 'family':
            return dispatch({ type: FILTER_FAMILY_BATHROOM, payload: isSelected })
        case 'mask':
            return dispatch({ type: FILTER_PRIVATE, payload: isSelected })
        case 'stroller-accessible':
            return dispatch({ type: FILTER_STROLLER_ACCESS, payload: true })
        case 'stroller-inaccessible':
            return dispatch({ type: FILTER_STROLLER_ACCESS, payload: false })
        case 'key':
            return dispatch({ type: FILTER_REQUIRES_KEY, payload: isSelected })
        default:
            return null
    }
}
export const applyFilterToPins = (filters) => dispatch => {
    console.log(filters)
    return true
    // return dispatch(locationAddToggleButton(false))
}

export const updateRatingValue = (rating, isSelected) => dispatch => {
    switch (rating) {
        case 'quality':
            return dispatch({ type: RATING_QUALITY, payload: isSelected })
        case 'clean':
            return dispatch({ type: RATING_CLEAN, payload: isSelected })
        case 'nursing':
            return dispatch({ type: RATING_NURSING, payload: isSelected })
        case 'quiet':
            return dispatch({ type: RATING_QUIET, payload: isSelected })
        default:
            return null
    }
}

// Thunks down here
// OUR SERVER....
export const generateMapPins = (longitude, latitude) => {
    const fetchURL = `http://45.55.2.200/api/location/near/${longitude}/${latitude}`
    // console.log(fetchURL)
    return function (dispatch) {
        fetch(fetchURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then(response => response.json())
            .then(mapData => {
                console.log('generateMapPins = mapData: ', mapData)
                dispatch({ type: 'LOCATION_DATA_ALL', payload: mapData })
            })
    }
}

export const addNewLocation = (location) => {
    return function (dispatch) {
        fetch('http://45.55.2.200/api/location/new', {
            method: 'POST',
            headers: new Headers({
                // 'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            }),
            body: JSON.stringify(location),
        })
            .then(mapData => {
                setCardPosition('hidden')
                locationAddToggleButton(false)
                console.log('mapData', mapData)
            })
    }
}

//GOOGLE MAPS API
export const getLocationDetails = (placeid) => {
    return function (dispatch) {
        if (placeid) {
            const fetchURL = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeid}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`
            // console.log(fetchURL)
            fetch(fetchURL, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            })
                .then(response => response.json())
                .then(locationDetails => {
                    console.log('getLocationDetails = locationDetails: ', locationDetails)
                    dispatch({ type: 'LOCATION_DATA_DETAILS', payload: locationDetails })
                })
        }
    }
}
