import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'
import { colors, textStyles } from '../../config/styles'
import Icon from '../../components/Icon/index'

// Redux 
import { connect } from 'react-redux'
import {
    enterPreview,
    generateMapPins,
    getLocationDetails,
    setCardPosition,
    locationAddLoad,
    locationFilterLoad
} from '../../redux/actions'

// Containers
import { 
    LocationAdd,
    LocationFilter,
    LocationPreview, 
    Preview, 
    SearchBar, 
} from '../index'

// Components
import {
    BottomButtonFilterButton,
    BottomButtonListButton,
    LocationCustomCallout,
    LocationHomeBottomButton,
    LocationHomeOptionsBar,
    MapPin,
    OptionsBarButton,
} from '../../components'


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
            locationAdd: false,
            locationFilter: false,
        }

        this._toggleOverlay = this._toggleOverlay.bind(this)
        this._onPinPush = this._onPinPush.bind(this)
        this._preview = this._preview.bind(this)
        this._setUserCurrentLocation = this._setUserCurrentLocation.bind(this)
        this._onRegionChangeComplete = this._onRegionChangeComplete.bind(this)
        this._onLocationAddPress = this._onLocationAddPress.bind(this)
        this._locationPreview = this._locationPreview.bind(this)
        this._onFilterButtonPress = this._onFilterButtonPress.bind(this)
        this._filterPreview = this._filterPreview.bind(this)
    }
    componentWillMount() {
        this.props.generateMapPins()
    }
    componentDidMount() {
        this._setUserCurrentLocation()
    }
    _toggleOverlay() {
        this.setState({
            overlay: !this.state.overlay,
        })
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

    _onPinPush(placeid) {
        this.props.enterPreview(placeid)
        this.props.setCardPosition('half')
    }
    _onRegionChangeComplete(region) {
        /* as user moves around the map, update the current state
        */
        this.setState({ region })
    }
    _onLocationAddPress() {
        this.props.locationAddLoad()
    }
    _locationPreview() {
        if (this.props.locationAdd === true) {
            return (
                <Preview>
                    <LocationAdd
                        title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"} 
                        lat={49.2634046} lng={-123.1404133} width={width - 80} height={120}
                    />
                </Preview>
            )
        }
    }
    _onFilterButtonPress() {
        // console.log('_onFilterButtonPress')
        this.props.locationFilterLoad()
    }
    _filterPreview() {
        // console.log('_filterPreview', this.props)
        if (this.props.locationFilter === true) {
        // console.log('this.props.locationFilter === true')
            return (
                <Preview>
                    <LocationFilter />
                </Preview>
            )
        }
    }
    _onPinPush(placeid) {
        this.props.enterPreview(placeid)
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
            bottomButtonStatus = (
                <View>
                    <BottomButtonListButton />
                    <BottomButtonFilterButton onPress={() => this._onFilterButtonPress.bind((this))} />
                </View>
            )
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
                <MapPin scale="0.5" pinColor={colors.apricot} iconName={pin.mapPin} />
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

                    {this.state.locationAdd ?
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
                        :
                        null
                    }
                </MapView>

                {(this.props.preview || this.props.locationAdd) ? null : (
                    <View style={styles.optionsContainer}>
                        <View style={styles.optionsBar}>
                            <LocationHomeOptionsBar>
                                <OptionsBarButton onPress={() => this._setUserCurrentLocation()} iconName={"location"} />
                                <OptionsBarButton onPress={() => this._onLocationAddPress()} iconName={"starbaby-face"} />
                                <OptionsBarButton onPress={() => this.setState({ locationAdd: !this.state.locationAdd })} iconName={"add"} />
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
                            <LocationHomeBottomButton onPress={this._toggleOverlay} />
                        </View>
                    </View>
                )}

                {this._preview()}
                {this._locationPreview()}
                {this._filterPreview()}

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    locationAdd: state.card.locationAdd,
    locationDetails: state.map.locationDetails,
    locationFilter: state.card.locationFilter,
    pins: state.map.generatedLocationData,
    placeid: state.button.placeid,
    yVal: state.card.yVal,
    preview: state.button.preview,
})

const mapDispatchToProps = {
    enterPreview,
    generateMapPins,
    getLocationDetails,
    setCardPosition,
    locationAddLoad,
    locationFilterLoad,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)