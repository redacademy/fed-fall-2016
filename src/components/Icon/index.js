import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from './icon-config.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default Icon

// Usage would be something like this:
// <Icon name="diaper" size={60} color="brown" />

// :: AVAILABLE ICONS :: 
// add
// baby-change-table
// bottle
// breast-feeding
// cleanliness
// diaper
// exit
// family
// filter-list
// filter
// history
// key
// location-add-new
// location-saved
// location
// love-off
// love-on
// male-and-female
// mask
// microphone
// new-entry
// photo-library
// photo
// private
// quality-ribbon
// quality-shield
// quiet
// search
// sort-list
// stroller-accessible
// stroller-inaccessible-alternate
// stroller-inaccessible
// thumbs-down
// thumbs-up
// user