import React, { Component } from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import Icon from '../../../components/Icon/index'
import { colors, textStyles } from '../../../config/styles'
import styles from './styles'
const { width, height } = Dimensions.get('window')

import {
    LocationCustomCallout,
} from '../../../components'

class MapMarker extends Component {
 render() {
    return(
      <MapView.Marker
    coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
    pinColor={colors.blush}
    flat={true}
    >
    <MapView.Callout tooltip={true} style={{ width: width * 0.5, height: height * 0.25, backgroundColor: 'transparent' }} setSelected={true}>
        <LocationCustomCallout>
            <View style={styles.locationAddContainer}>
                <Text style={textStyles.textStyle6}>New Location</Text>
                <Text style={styles.separator}></Text>
                <Text style={[{ padding: 5 }, textStyles.textStyle7]}>Press & Hold to Move</Text>
                <View>
                    <TouchableOpacity onPress={() => this._onLocationAddPress()}>
                        <View style={styles.button}>
                            <Icon style={styles.icon} name={"add"} size={60} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </LocationCustomCallout>
    </MapView.Callout>
</MapView.Marker>
  )
 }
}

export default MapMarker
