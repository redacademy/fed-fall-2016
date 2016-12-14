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
    setSelectedCard,
} from '../../redux/actions'

// Containers
import {
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
            _locationAdd: false, /*required for location add modal*/
        }

        this._toggleOverlay = this._toggleOverlay.bind(this)
        // this._onPinPush = this._onPinPush.bind(this)
        this._preview = this._preview.bind(this)
        this._setUserCurrentLocation = this._setUserCurrentLocation.bind(this)
        this._onRegionChangeComplete = this._onRegionChangeComplete.bind(this)
        this._onFilterButtonPress = this._onFilterButtonPress.bind(this)
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
    _onRegionChangeComplete(region) {
        /* as user moves around the map, update the current state
        */
        this.setState({ region })
    }
    _onPinPush(placeid) {
        this.props.setSelectedCard('LocationPreview', placeid)
        this.props.setCardPosition('half')
    }
    _onLocationAddPress() {
        this.props.setSelectedCard('LocationAdd')
        this.props.setCardPosition('full')
    }
    _onFilterButtonPress() {
        this.props.setSelectedCard('LocationFilter')
        this.props.setCardPosition('full')
    }
    _preview() {
        if ((this.props.preview === true) || (this.props.cardVisible === true)) {
            return (
                <Preview />
            )
        }
    }
    // _preview() {
    //     if (this.props.preview === true) {
    //         return (
    //             <Preview>
    //                 <LocationPreview placeId={this.props.placeid} />
    //             </Preview>
    //         )
    //     }
    // }
    
    render() {
        let bottomButtonStatus = null

        if (this.state.overlay) {
            bottomButtonStatus = (
                <View>
                    <BottomButtonListButton />
                    <BottomButtonFilterButton onPress={this._onFilterButtonPress} />
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
                <MapPin
                    scale="0.5"
                    amenities={{changeTable: false, nursingRoom: true}}
                    />
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

                {(this.props.cardVisible) ? null : (
                    <View style={styles.optionsContainer}>
                        <View style={styles.optionsBar}>
                            <LocationHomeOptionsBar>
                                <OptionsBarButton onPress={() => this._setUserCurrentLocation()} iconName={"location"} />
                                <OptionsBarButton onPress={() => this.setState({ locationAdd: !this.state.locationAdd })} iconName={"add"} />
                                <OptionsBarButton onPress={() => alert('pressed user!')} iconName={"user"} />
                            </LocationHomeOptionsBar>
                        </View>
                    </View>

                )}

                {/* Apply this overlay when user filters */}
                {this.state.overlay ? <View style={[styles.overlay]} /> : <View />}

                {/* Filter options */}
                <View style={styles.bottomButtons}>{bottomButtonStatus}</View>

                {(this.props.cardVisible) ? null : (
                    <View style={{ position: 'absolute', bottom: 680 }}>
                        <View style={styles.bottomContainer}>
                            <SearchBar />
                            <LocationHomeBottomButton onPress={this._toggleOverlay} />
                        </View>
                    </View>
                )}

                {this._preview()}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedCard: state.card.selectedCard,
    cardVisible: state.card.cardVisible,
    locationDetails: state.map.locationDetails,
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
    setSelectedCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)