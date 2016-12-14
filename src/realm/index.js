import Realm from 'realm'
import Location from './location/schema'

// Initialize a Realm with Location models
let realm = new Realm({ schema: [Location] })