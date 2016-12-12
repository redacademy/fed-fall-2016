// Initialize a Realm with Car and Person models
let realm = new Realm({schema: [LocationSchema]})

const LocationsSchema = {
  name: 'Location',
  primaryKey: 'LocationId',
  properties: {
   locationId:  'string',
   loc: { lat: 'string' , lng: 'string'},
   createdAt: new Date(),
}