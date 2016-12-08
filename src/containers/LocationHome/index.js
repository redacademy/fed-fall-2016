import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'
import { rgbColors } from '../../config/styles'
import Icon from '../../components/Icon/index'

// Redux 
import { connect } from 'react-redux'
import {
    enterPreview,
    enterLocationAdd,
    generateMapPins,
    getLocationDetails
} from '../../redux/actions'
import { bindActionCreators } from 'redux'

// Containers
import { SearchBar, Preview, LocationPreview } from '../index'

// Components
import {
    LocationHomeBottomButton,
    BottomButtonFilterButton,
    BottomButtonListButton,
    LocationHomeOptionsBar,
    OptionsBarButton,
    MapPin,
    Button
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
        this._showPins = this._showPins.bind(this)
    }

    _setUserCurrentLocation() {
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

    componentWillMount() {
        this.props.generateMapPins()
    }
    componentDidMount() {
        this._setUserCurrentLocation()

    }

    _onPinPush(placeid) {
        this.props.enterPreview(placeid)
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

    _showPins() {
        console.log('show pins')
        return <View>
            {this.props.pins && this.props.pins.generatedLocationData.length
                ? this.props.pins.generatedLocationData.map((pin, i) => (
                    <MapView.Marker key={i}
                        coordinate={{ latitude: pin.location.lat, longitude: pin.location.long }}
                        />
                ))
                : null
            }
        </View>
    }

    _onRegionChangeComplete(region) {
        /* as user moves around the map, update the current state
        */
        this.setState({ region })
    }
    _preview() {
        if (this.props.preview === true) {

            {/* Go to the preview container to add to the card! */ }
            return (
                <Preview>
                    <LocationPreview placeId={this.props.placeid} />
                </Preview>
            )
        }
    }

    render() {
        let bottomButtonStatus = null

        if (this.state.overlay) {
            bottomButtonStatus = <View><BottomButtonListButton /><BottomButtonFilterButton /></View>

        }
        const icon = this.props.pins.mapPin
        const pins = this.props.pins.map((pin, i) => {
            return <MapView.Marker
                key={i}
                coordinate={{
                    longitude: pin.location.long,
                    latitude: pin.location.lat,
                }}
                onPress={() => this._onPinPush(pin.placeid)}
                >
                <MapPin scale="0.5" pinColor={rgbColors.apricot} iconName={pin.mapPin} />
            </MapView.Marker>
        })

        return (
            <View style={styles.mainContainer}>
                <MapView
                    ref={ref => { this.map = ref } } // require for animateToRegion
                    style={styles.mapContainer}
                    initialRegion={this.state.region}
                    showsUserLocation
                    followsUserLocation
                    onRegionChange={region => this._onRegionChangeComplete(region)}
                    >

                    {pins}

                    {this.state.addLocation ?
                        <MapView.Marker
                            ref={ref => { this.marker = ref } }    //required for closing pin when "add clicked"
                            coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                            pinColor={'#f17979'}
                            flat={true}
                            title={'this is a test title'}
                            >
                            <MapView.Callout tooltip={true} style={{ width: width * 0.6, backgroundColor: 'transparent' }} setSelected={true}>
                                <LocationAddMarkerCallout>
                                    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
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
                            <MapPin scale="0.5" pinColor={rgbColors.apricot} iconName={pin.mapPin} />
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
    pins: state.map.generatedLocationData,
    locationDetails: state.map.locationDetails,
    placeid: state.button.placeid,
})

const mapDispatchToProps = {
    enterPreview,
    enterLocationAdd,
    generateMapPins,
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)