<<<<<<< 1f424e44d7dd4418ad354c3b502cc2619162a3ee
import Realm from 'realm'
import Location from './location/schema'

// Initialize a Realm with Location models
let realm = new Realm({ schema: [Location] })
=======
const Realm = require('realm');

let realm = new Realm({
    schema: [{ name: '', properties: { name: 'string' } }]
});

realm.write(() => {
    realm.create('', { name: '' });
});

>>>>>>> m

