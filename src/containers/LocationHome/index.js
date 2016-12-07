import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'

// Redux 
import { connect } from 'react-redux'
import {
    enterPreview,
    enterLocationAdd,
} from '../../redux/actions'

// Containers
import { SearchBar, Preview } from '../index'

// Components
import {
    LocationHomeBottomButton,
    BottomButtonFilterButton,
    BottomButtonListButton,
    LocationHomeOptionsBar,
    OptionsBarButton,
    // AddressBlock,
    // FilterList,
    // RatingBlock,
} from '../../components'
import IconOptionalTitleCircularBorder from '../../icons/IconOptionalTitleCircularBorder'

import LocationAddMarkerCallout from '../../components/LocationAddMarkerCallout'

// Initialize Variables
const { width, height } = Dimensions.get('window')
const LATITUDE = 49.263432
const LONGITUDE = -123.137952
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = .01
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class LocationHome extends Component {

    constructor(props) {
        super(props)

        this.state = {
            overlay: false,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [],
            addLocation: false,
        }

        this._toggleOverlay = this._toggleOverlay.bind(this)
        this._onPinPush = this._onPinPush.bind(this)
        this._preview = this._preview.bind(this)
        this._onRegionChangeComplete = this._onRegionChangeComplete.bind(this)
        this._onLocationAddPress = this._onLocationAddPress.bind(this)
        this._locationPreview = this._locationPreview.bind(this)
    }
    componentDidMount() {
        this._setUserCurrentLocation()
    }

    _setUserCurrentLocation() {
        /* 
          setUserCurrentLocation
              => requires showsUserLocation, followsUserLocation to be enabled on MapView
              - getCurrentPosition( success, error, options) from user device 
              - 
          */
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    },
                })
                this.map.animateToRegion(this.state.region, 1000)
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
        this.watchID = navigator.geolocation.watchPosition((position) => {
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                },
            })
        })
    }
    _toggleOverlay() {
        this.setState({
            overlay: !this.state.overlay,
        })
    }
    _onPinPush() {
        this.props.enterPreview()
    }
    _preview() {
        if (this.props.preview === true) {

            {/* Go to the preview container to add to the card! */ }
            return (
                <Preview>
                    <Text>This is a preview</Text>
                </Preview>
            )
        }
    }
    _onLocationAddPress() {
        this.props.enterLocationAdd()
        this.marker.pinColor = "black"
    }
    _locationPreview() {
        if (this.props.locationAdd === true) {
            return (
                <Preview>
                    <Text>This is a _onLocationAddPress() preview</Text>
                </Preview>
            )
        }
    }
    _onRegionChangeComplete(region) {
        /* as user moves around the map, update the current state
        */
        this.setState({ region })
    }

    render() {
        let bottomButtonStatus = null
        if (this.state.overlay) {
            bottomButtonStatus = <View><BottomButtonListButton /><BottomButtonFilterButton /></View>
        }
        return (
            <View style={styles.mainContainer}>
                <MapView
                    ref={ref => { this.map = ref } }    //required for animateToRegion
                    style={styles.mapContainer}
                    initialRegion={this.state.region}
                    showsUserLocation
                    followsUserLocation
                    onRegionChange={region => this._onRegionChangeComplete(region)}
                    >
                    {this.state.addLocation ?
                        <MapView.Marker
                            ref={ref => { this.marker = ref } }    //required for closing pin when "add clicked"
                            coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                            pinColor={'#f17979'}
                            flat={true}
                            title={'this is a test title'}
                            >
                            <MapView.Callout tooltip={true} style={{ width: width*0.6, backgroundColor: 'transparent' }} setSelected={true}>
                                <LocationAddMarkerCallout>
                                <View style={{flex:1, backgroundColor: 'transparent'}}>
                                    <Text>New Location!</Text>
                                    <Text>Press & Hold to Move</Text>
                                    <TouchableOpacity onPress={() => this._onLocationAddPress()}>
                                        <IconOptionalTitleCircularBorder
                                            iconColor={'#f17979'}
                                            size={50}
                                            iconName="add"
                                            noTitle={true}
                                            />
                                    </TouchableOpacity>
                                    </View>
                                </LocationAddMarkerCallout>
                            </MapView.Callout>
                        </MapView.Marker>
                        :
                        null
                    }
                </MapView>

                {(this.props.preview || this.props.locationAdd) ? null : (
                    <View style={styles.optionsContainer}>
                        <View style={styles.optionsBar}>
                            <LocationHomeOptionsBar>
                                <OptionsBarButton onPress={() => this._setUserCurrentLocation()} iconName={"location"} />
                                <OptionsBarButton onPress={() => this.setState({ addLocation: !this.state.addLocation })} iconName={"add"} />
                                <OptionsBarButton onPress={() => this._onPinPush()} iconName={"user"} />
                            </LocationHomeOptionsBar>
                        </View>
                    </View>
                )}

                {/* Apply this overlay when user filters */}
                {this.state.overlay ? <View style={[styles.overlay]} /> : <View />}

                {/* Filter options */}
                <View style={styles.bottomButtons}>{bottomButtonStatus}</View>

                {(this.props.preview || this.props.locationAdd) ? null : (
                    <View style={{ position: 'absolute', bottom: 680 }}>
                        <View style={styles.bottomContainer}>
                            <SearchBar />
                            <LocationHomeBottomButton onPress={this.toggleOverlay} />
                        </View>
                    </View>
                )}

                {this._preview()}
                {this._locationPreview()}

            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    preview: state.button.preview,
    locationAdd: state.button.locationAdd,
})

const mapDispatchToProps = {
    enterPreview,
    enterLocationAdd,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)