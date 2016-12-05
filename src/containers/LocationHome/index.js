import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { styles } from './style'
import { View } from 'react-native'
import SearchBar from '../SearchBar/index'
import LocationHomeBottomButton from '../../components/LocationHomeBottomButton/index'
import BottomButtonFilterButton from '../../components/BottomButtonFilterButton/index'
import BottomButtonListButton from '../../components/BottomButtonListButton/index'
import LocationHomeOptionsBar from '../../components/LocationHomeOptionsBar'
import OptionsBarButton from '../../components/OptionsBarButton'

const Dimensions = require('Dimensions')
// We can use this to make the overlay fill the entire width
const { width, height, } = Dimensions.get('window')

// RED Academy
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
    }
    _toggleOverlay() {
        this.setState({
            overlay: !this.state.overlay,
        })
    }

    setUserCurrentLocation() {
        // getCurrentPosition( success, error, options) from user device 
        //  => requires showsUserLocation, followsUserLocation to be enabled on MapView
        navigator.geolocation.getCurrentPosition(
            //success
            (position) => {
                //console.log(position)
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    },
                })
            },
            //error
            (error) => alert(error.message),
            //options
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, }
        )
        this.watchID = navigator.geolocation.watchPosition((position) => {
           // console.log(position)
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

    componentDidMount() {
        this.setUserCurrentLocation()
    }
    render() {
        let bottomButtonStatus = null
        if (this.state.overlay) {
            bottomButtonStatus = <View><BottomButtonListButton /><BottomButtonFilterButton /></View>
        }
        return (
            <MapView
                style={styles.container}
                initialRegion={this.state.region}
                showsUserLocation      // enable when not using simulator
                followsUserLocation    // enable when not using simulator
                >
                <View style={styles.optionsBar}>
                    <LocationHomeOptionsBar>
                        <OptionsBarButton onPress={() => {
                            //console.log('click reset location')
                        } } iconName={"location"} />
                        <OptionsBarButton onPress={() => {
                            //console.log('click new location')
                        } } iconName={"add"} />
                        <OptionsBarButton onPress={() => {
                            //console.log('click user info')
                        } } iconName={"user"} />
                    </LocationHomeOptionsBar>
                </View>
                <View style={styles.bottomButtons} >{bottomButtonStatus}</View>
                <View style={styles.searchContainer}>
                    <SearchBar />
                    <LocationHomeBottomButton onPress={this._toggleOverlay.bind(this)} />
                </View>
                {this.state.overlay ? <View style={[styles.overlay]} /> : <View style={styles.searchContainer} />}
            </MapView>
        )
    }
}



export default LocationHome
