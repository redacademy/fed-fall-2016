import React, { Component, } from 'react'
import MapView from 'react-native-maps'
import { styles, } from './style'

class LocationHome extends Component {
  render() {
    return (
      <MapView
        style={styles.container}
        region={{
          latitude: 49.263432,
          longitude: -123.137952,
          latitudeDelta: .01,
          longitudeDelta: .01,
        }}
        // showsUserLocation      // enable when not using simulator
        // followsUserLocation    // enable when not using simulator
        />
    )
  }
}



export default LocationHome
