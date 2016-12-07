import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'
import { rgbColors } from '../../config/styles'

// Redux 
import { connect } from 'react-redux'
import { enterPreview, generateMapPins } from '../../redux/actions'

// Containers
import { SearchBar, Preview } from '../index'

// Components
import {
  LocationHomeBottomButton,
  BottomButtonFilterButton,
  BottomButtonListButton,
  LocationHomeOptionsBar,
  OptionsBarButton,
  MapPin
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
    this._showPins = this._showPins.bind(this)
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
  _preview() {
    if (this.props.preview === true) {

      {/* Go to the preview container to add to the card! */ }
      return <Preview />
    }
  }
  _showPins(){
      console.log('show pins')
      return <View>
      {this.props.pins && this.props.pins.generatedLocationData.length
        ? this.props.pins.generatedLocationData.map((pin, i) => (
          <MapView.Marker key={i}
            coordinate={{latitude: pin.location.lat, longitude: pin.location.long}}
          />
        ))
        : null
      }
      </View>
    }

    // <MapView.Marker
    //         coordinate={{latitude: 49.263432, longitude: -123.137952}}
    //       />
    //     ))

  render() {
    console.log('RENDER ', this.props.pins)
    let bottomButtonStatus = null

    if (this.state.overlay) {
      bottomButtonStatus = <View><BottomButtonListButton /><BottomButtonFilterButton /></View>
    }

    const pins = this.props.pins.map((pin, i) => {
          return <MapView.Marker
            key={i}
            coordinate={{
              longitude: pin.location.long,
              latitude: pin.location.lat,
            }}
            onSelect={() => this._onPinPush(pin.placeid)}
          />
        })

    return (
      <View style={styles.mainContainer}>
        <MapView
          style={styles.mapContainer}
          initialRegion={this.state.region}
          showsUserLocation
          followsUserLocation
        >

        {pins}
        
        </MapView>
          
        {this.props.preview ? null : (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsBar}>
              <LocationHomeOptionsBar>
                <OptionsBarButton onPress={() => { } } iconName={"location"} />
                <OptionsBarButton onPress={() => { } } iconName={"add"} />
                <OptionsBarButton iconName={"user"} />
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
  preview: state.button.preview,
  pins: state.map.generatedLocationData,
})

const mapDispatchToProps = {
  enterPreview,
  generateMapPins,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)