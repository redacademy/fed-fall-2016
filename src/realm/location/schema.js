const LocationSchema = {
    name: 'Location',
    primaryKey: 'locationId',
    properties: {
        locationId: 'string',
        lat: 'string',
        lng: 'string',
    },
}

export default LocationSchema
