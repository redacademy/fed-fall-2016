import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'

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
  OptionsBarButton
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
  _onPinPush() {
    this.props.enterPreview()
  }
  _preview() {
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
          style={styles.mapContainer}
          initialRegion={this.state.region}
          showsUserLocation
          followsUserLocation
          />

        {this.props.preview ? null : (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsBar}>
              <LocationHomeOptionsBar>
                <OptionsBarButton onPress={() => { } } iconName={"location"} />
                <OptionsBarButton onPress={() => { } } iconName={"add"} />
                <OptionsBarButton onPress={() => this._onPinPush()} iconName={"user"} />
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
})

const mapDispatchToProps = {
  enterPreview,
  generateMapPins,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)