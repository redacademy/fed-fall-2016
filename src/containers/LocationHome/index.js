import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'
import { colors, textStyles } from '../../config/styles'
import Icon from '../../components/Icon/index'

// Redux 
import { connect } from 'react-redux'
import {
    enterPreview,
    enterLocationAdd,
    generateMapPins,
    getLocationDetails
} from '../../redux/actions'

// Containers
import { SearchBar, Preview, LocationPreview } from '../index'

// Components
import {
    AddressBlock,
    BottomButtonFilterButton,
    BottomButtonListButton,
    Button,
    FilterList,
    LocationCustomCallout,
    LocationHomeBottomButton,
    LocationHomeOptionsBar,
    MapBlock,
    MapPin,
    OptionsBarButton,
    // RatingBlock,
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
            addLocation: false,
        }

        this._toggleOverlay = this._toggleOverlay.bind(this)
        this._onPinPush = this._onPinPush.bind(this)
        this._preview = this._preview.bind(this)
        this._onRegionChangeComplete = this._onRegionChangeComplete.bind(this)
        this._onLocationAddPress = this._onLocationAddPress.bind(this)
        this._locationPreview = this._locationPreview.bind(this)
    }
    componentWillMount() {
        this.props.generateMapPins()
    }
    componentDidMount() {
        this._setUserCurrentLocation()
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
    }

    _onLocationAddPress() {
        this.props.enterLocationAdd()
    }

    _locationPreview() {
        if (this.props.locationAdd === true) {
            return (
                <Preview>
                    <ScrollView>
                        <AddressBlock title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"} />
                        <FilterList showHeader={false} />
                        <MapBlock lat={49.2634046} lng={-123.1404133} zoom={17} width={width - 80} height={120} pinScale={0.4} pinColor={'red'} iconName={'starbaby-face'} />
                        <Button style={{ alignSelf: 'flex-end' }}>
                            <Text style={textStyles.textStyle4}>SUBMIT</Text>
                        </Button>
                    </ScrollView>
                </Preview>
            )
        }
    }
    _filterPreview() {
        if (this.props.filter === true) {
            return (
                <Preview>
                    <FilterList showHeader={true} />
                    <Button style={{ alignSelf: 'flex-end' }}>
                        <Text style={textStyles.textStyle4}>SUBMIT</Text>
                    </Button>
                </Preview>
            )
        }
    }
    /*
                        <AddressBlock title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"} />
    */
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

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate?')
    //     if (this.state.pins !== nextState.pins) {
    //     console.log('true')
    //         return true
    //     }
    //     console.log('true')
    //     return false
    // }

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

                    {this.state.addLocation ?
                        <MapView.Marker
                            // ref={ref => { this.marker = ref } }    //required for closing pin when "add clicked"
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
                            <LocationHomeBottomButton onPress={this._toggleOverlay} />
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