import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import Icon from '../../../components/Icon/index'
import { colors, textStyles } from '../../../config/styles'
import styles from './styles'
const { width, height } = Dimensions.get('window')
const w = width*0.5, h = height*0.25
// Redux 
import { connect } from 'react-redux'
import {
    setSelectedCard,
} from '../../../redux/actions'
import { LocationCustomCallout, } from '../LocationCustomCallout'
import region from '../region'

class MapMarker extends Component {
    _onLocationAddPress() {
        this.props.setSelectedCard('LocationAdd')
    }
    render() {
        return (
            <MapView.Marker
                coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                pinColor={colors.blush}
                flat={true}
                >
                <MapView.Callout tooltip={true} style={{ width: w, height: h, backgroundColor: 'transparent' }} setSelected={true}>
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
/*
*/
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    setSelectedCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker)
