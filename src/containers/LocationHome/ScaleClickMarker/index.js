import React, { Component } from 'react';
import MapView from 'react-native-maps'
import MapPin from '../../../components/MapPin'
import { Animated, Easing } from 'react-native'
import { connect } from 'react-redux'

class ScaleClickMarker extends Component {
    render() {
        const { selectedPlace, placeid } = this.props
       return (   
           <MapView.Marker
            coordinate={this.props.coordinate}
            onPress={() => {
                this.props.onPressFn()
                
            }} // not placeid
            >
        <MapPin
            scale={ (placeid === selectedPlace) ? 1 : 0.5 }
            amenities={this.props.amenities}
            />
    </MapView.Marker> 
    )
    }
}

const mapStateToProps = (state) => ({
    selectedPlace: state.card.placeid,
})

export default connect(mapStateToProps)(ScaleClickMarker);