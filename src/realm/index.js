import Realm from 'realm'
import realm from './index'

export const saveLocations = (locations) => {
    realm.write(() => {
        locations.forEach((location) => {
            realm.create('Location', location, true)
        })  
    })
}

