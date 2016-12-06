import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import { styles } from './style'

// Redux 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { enterPreview } from '../../redux/actions'

// Containers
import { SearchBar, Preview } from '../index'

// Components
import {
    LocationHomeBottomButton,
    BottomButtonFilterButton,
    BottomButtonListButton,
    LocationHomeOptionsBar,
    OptionsBarButton
} from '../../components'

// Initialize Variables
const { width, height, } = Dimensions.get('window')
const LATITUDE = 49.263432
const LONGITUDE = -123.137952
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = .01
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

//========================================================================

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

        this.toggleOverlay = this.toggleOverlay.bind(this)
        this.onPinPush = this.onPinPush.bind(this)
        this.preview = this.preview.bind(this)
    }

    componentDidMount() {
        this.setUserCurrentLocation()
    }

    setUserCurrentLocation() {
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
                this.map.animateToRegion(this.state.region, 2000)
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, }
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

    toggleOverlay() {
        this.setState({
            overlay: !this.state.overlay,
        })
    }


    onRegionChangeComplete(region) {
        /* as user moves around the map, update the current state
        */
        this.setState({ region, })
    }
    onPinPush() {
        this.props.enterPreview()
    }

    preview() {
        if (this.props.preview === true) {

            {/* Go to the preview container to add to the card! */ }
            return <Preview />
        }
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
                    onRegionChange={region => this.onRegionChangeComplete(region)}
                    >
                    {this.state.addLocation ?

                        <MapView.Circle
                            center={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude, }}
                            radius={15}
                            strokeWidth={5}
                            strokeColor={'#ffffff'}
                            fillColor={'#f17979'}
                            />

                        :
                        null
                    }
                </MapView>

                {this.props.preview ? null : (
                    <View style={styles.optionsContainer}>
                        <View style={styles.optionsBar}>
                            <LocationHomeOptionsBar>
                                <OptionsBarButton onPress={() => this.setUserCurrentLocation()} iconName={"location"} />
                                <OptionsBarButton onPress={() => this.setState({ addLocation: !this.state.addLocation, })} iconName={"add"} />
                                <OptionsBarButton onPress={() => this.onPinPush()} iconName={"user"} />
                            </LocationHomeOptionsBar>
                        </View>
                    </View>
                )}

                {/* Apply this overlay when user filters */}
                {this.state.overlay ? <View style={[styles.overlay]} /> : <View />}

                {/* Filter options */}
                <View style={styles.bottomButtons}>{bottomButtonStatus}</View>

                {this.props.preview ? null : (
                    <View style={{ position: 'absolute', bottom: 680 }}>
                        <View style={styles.bottomContainer}>
                            <SearchBar />
                            <LocationHomeBottomButton onPress={this.toggleOverlay} />
                        </View>
                    </View>
                )}

                {this.preview()}

            </View>
        )
    }
}
const mapStateToProps = (state) => ({
  preview: state.button.preview,
})

const mapDispatchToProps = {
  enterPreview,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)