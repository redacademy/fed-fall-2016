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
        /* 
            setUserCurrentLocation
              => requires showsUserLocation, followsUserLocation to be enabled on MapView
              - getCurrentPosition( success, error, options) from user device 
              - 
         */
        navigator.geolocation.getCurrentPosition(
            //success
            (position) => {
                // console.log('geolocation position: ', position)
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    },
                })
                this.map.animateToRegion(this.state.region, 2000)
            },
            //error
            (error) => alert(error.message),
            //options
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, }
        )
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // console.log('watchID: ', this.watchID, ' for position: ', position)
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                },
            })

        })
        // console.log('setUserCurrentLocation end, region: ', this.state.region)
    }

    onRegionChangeComplete(region) {
        /* as user moves around the map, update the current state
        */
        this.setState({ region, })
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
            <View style={styles.container}>
                <MapView
                    ref={ref => { this.map = ref } }    //required for animateToRegion
                    style={styles.container}
                    initialRegion={this.state.region}   //initial 
                    showsUserLocation      // enable when not using simulator
                    followsUserLocation    // enable when not using simulator
                    onPress={() => console.log('pressed map!')}
                    onRegionChange={region => this.onRegionChangeComplete(region)}
                    >
                    {this.state.addLocation ?
                        <MapView.Marker
                            coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude, }}
                            flat={true}
                            pinColor={'#f17979'}
                            style={styles.locationAddVisible}
                            />
                        :
                        null
                        }
                </MapView>
                <View style={styles.optionsBar}>
                    <LocationHomeOptionsBar>
                        <OptionsBarButton onPress={() => {
                            // console.log('location pressed')
                            this.setUserCurrentLocation()
                        } } iconName={"location"} />
                        <OptionsBarButton onPress={() => {
                            console.log('click new location')
                            this.setState({ addLocation: !this.state.addLocation, })
                        } } iconName={"add"}/>
                        <OptionsBarButton onPress={() => {
                            console.log('click user info')
                        } } iconName={"user"} />
                    </LocationHomeOptionsBar>
                </View>
            </View>
        )
    }
}

/*
markers: [
    {
        coordinate: {latitude: 12, longitude 120},
        image: require('./assets/diaper.png') //should be 56px/56px apprix
    }
]

                <MapView.Circle
                    center={{latitude: this.state.region.latitude, longitude: this.state.region.longitude,}}
                    radius={15}
                    strokeWidth={5}
                    strokeColor={'#ffffff'}
                    fillColor={'#f17979'}
                    />

    {this.state.markers.map((marker, i) => (
        <MapView.Marker
            key={i}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description} 
            image={marker.image}
            />   
        ))}


                <View style={styles.bottomButtons} >{bottomButtonStatus}</View>
                <View style={styles.searchContainer}>
                    <SearchBar />
                    <LocationHomeBottomButton onPress={this._toggleOverlay.bind(this)} />
                </View>
                {this.state.overlay ? <View style={[styles.overlay]} /> : <View style={styles.searchContainer} />}
*/

export default LocationHome
