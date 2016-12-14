import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'
import { buttonSize } from '../../config/styles'
import autoBind from 'react-autobind'

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
    ButtonClickableTitle,
    IconMulti,
    MapPin,
    OptionsBarButton,
    OptionsBar,
    BottomButton,
    MapMarker
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
            _locationAdd: false, /*required for location add modal*/
        }
    }
    componentWillMount() {
        this.props.generateMapPins()
    }
    componentDidMount() {
        this._setUserCurrentLocation()
    }
    _toggleOverlay() {
        this.setState({ overlay: !this.state.overlay })
    }
    _setUserCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                this.setState({
                    region:Object.assign({}, region,  {
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
                   region:Object.assign({}, region,  {
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
        this.props.setSelectedCard('LocationAdd')
    }
    _preview() {
        if (this.props.cardVisible === true)
            return <Preview />
    }
    render() {
        const pins = this.props.pins.map((pin, i) => {
            console.log('pin: ', pin)
            return <MapView.Marker
                key={i}
                coordinate={{
                    longitude: pin.location.long, // not lng
                    latitude: pin.location.lat,
                }}
                onPress={this._onPinPush.bind(this, pin.placeid)} // not placeid
                >
                <MapPin
                    scale="0.5"
                    amenities={{ changeTable: true, nursingRoom: false }}
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

                    {this.state._locationAdd ?
                        <MapMarker />
                        :
                        null
                    }
                </MapView>

                {(this.props.cardVisible) ? null : (
                    <View style={styles.optionsBarContainer}>
                        <OptionsBar>
                            <OptionsBarButton onPress={() => this._setUserCurrentLocation()} iconName={"location"} />
                            <OptionsBarButton onPress={() => this.setState({ _addLocation: !this.state._addLocation })} iconName={"add"} />
                            <OptionsBarButton onPress={() => this._onPinPush()} iconName={"user"} />
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
})

const mapDispatchToProps = {
    enterPreview,
    generateMapPins,
    getLocationDetails,
    setCardPosition,
    setSelectedCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)