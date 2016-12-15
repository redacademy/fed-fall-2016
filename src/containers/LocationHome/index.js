import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import ScaleClickMarker from '../LocationHome/ScaleClickMarker'
import styles from './styles'
import { buttonSize, colors, textStyles } from '../../config/styles'
import autoBind from 'react-autobind'
const { width, height } = Dimensions.get('window')
const w = width*0.5, h = height*0.25

// Redux 
import { connect } from 'react-redux'
import {
    enterPreview,
    generateMapPins,
    getLocationDetails,
    setCardPosition,
    setSelectedCard,
    locationAddButton,
} from '../../redux/actions'

import {
    BottomButton,
    LocationCustomCallout,
    MapMarker,
    OptionsBarButton,
    OptionsBar,
    Preview,
    SearchBar,
} from '../index'

// Components
import {
    ButtonClickableTitle,
    Icon,
    IconMulti,
    MapPin,
} from '../../components'

import region from './region'

class LocationHome extends Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.state = {
            overlay: false,
            region,
            markers: [],
            pinRefs: []
        }
    }
    componentWillMount() {
        this._setUserCurrentLocation()
        
    }
    componentDidMount() {
        this.props.generateMapPins(this.state.region.longitude, this.state.region.latitude)
    }
    _toggleOverlay() {
        this.setState({ overlay: !this.state.overlay })
    }
    _setUserCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                this.setState({
                    region: Object.assign({}, region, {
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    }),
                })
                this.map.animateToRegion(this.state.region, 1000)
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
        this.watchID = navigator.geolocation.watchPosition(
            ({ coords }) => {
                this.setState({
                    region: Object.assign({}, region, {
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    }),
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
    }
    _onLocationAddPress() {
        this.props.locationAddButton(!this.props.locationAdd)
    }
    _locationAddPress() {
        this.props.setSelectedCard('LocationAdd')
    }
    _preview() {
        if (this.props.cardVisible === true)
            return <Preview />
    }
   
    render() {
        const pins = this.props.pins.map((pin, i) => {
            return <ScaleClickMarker 
                    onPressFn={this._onPinPush.bind(this, pin.obj.placeId)}
                    placeid={pin.placeid}
                    key={i}
                    coordinate={{
                        longitude: pin.obj.loc[0], // not lng
                        latitude: pin.obj.loc[1],
                    }}
                    scale="0.5"
                    amenities={{ changeTable: true, nursingRoom: false }}
                    />
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

                    {(this.props.locationAdd) ?
                        <MapView.Marker
                            coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                            pinColor={colors.blush}
                            flat={true}
                            >
                            <MapView.Callout tooltip={true} style={{ width: w, height: h, backgroundColor: 'transparent' }} setSelected={true}>
                                <LocationCustomCallout>
                                    <View style={styles.locationAddContainer}>
                                        <Text style={textStyles.textStyle6}>New Location</Text>
                                        <Text style={[{ padding: 5 }, textStyles.textStyle7]}>Press & Hold to Move</Text>
                                        <View>
                                            <TouchableOpacity onPress={() => this._locationAddPress()}>
                                                <View style={styles.button}>
                                                <IconMulti name={"add"} size={buttonSize.optionBar} circular border iconColor={colors.blush} />
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
                    <View style={styles.optionsBarContainer}>
                        <OptionsBar>
                            <OptionsBarButton onPress={() => this._setUserCurrentLocation()} iconName={"location"} />
                            <OptionsBarButton onPress={() => this._onLocationAddPress()} iconName={"add"} />
                            <OptionsBarButton onPress={() => console.log('user button pressed')} iconName={"user"} />
                        </OptionsBar>
                    </View>

                )}

                {/* Apply this overlay when user filters */}
                {this.state.overlay ? <View style={[styles.overlay]} /> : <View />}

                {/* Filter options */}

                {(this.state.overlay)
                    ? (
                        <View style={styles.bottomButtons}>
                            <ButtonClickableTitle title={'List'} iconName={'sort-list'} iconSize={buttonSize.searchBar} onPress={() => this.props.setSelectedCard('LocationList')} />
                            <ButtonClickableTitle title={'Filter'} iconName={'filter'} iconSize={buttonSize.searchBar} onPress={() => this.props.setSelectedCard('LocationFilter')} />
                        </View>
                    )
                    : null
                }
                {(this.props.cardVisible) ? null : (
                    <View style={styles.searchContainer}>
                        <SearchBar />
                        <BottomButton onPress={this._toggleOverlay} />
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
    locationAdd: state.card.locationAdd,
})

const mapDispatchToProps = {
    enterPreview,
    generateMapPins,
    getLocationDetails,
    setCardPosition,
    setSelectedCard,
    locationAddButton,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)