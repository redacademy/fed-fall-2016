import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { styles } from './style'
import { Text, View, Button, ScrollView, Dimensions } from 'react-native'
import SearchBar from '../SearchBar/index'
import Card from '../../components/Card'
import { pinPush } from '../../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LocationHomeBottomButton from '../../components/LocationHomeBottomButton/index'
import BottomButtonFilterButton from '../../components/BottomButtonFilterButton/index'
import BottomButtonListButton from '../../components/BottomButtonListButton/index'
import LocationHomeOptionsBar from '../../components/LocationHomeOptionsBar'
import OptionsBarButton from '../../components/OptionsBarButton'

// We can use this to make the overlay fill the entire width
const { width, height, } = Dimensions.get('window')

// RED Academy
const LATITUDE = 49.263432
const LONGITUDE = -123.137952
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = .01
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class LocationHome extends Component {
  constructor(props){
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

    this.onPinPush = this.onPinPush.bind(this)
    this.showCard = this.showCard.bind(this)
  }
  
  onPinPush(){
    this.props.pinPush()
  }

  showCard(){
    if(this.props.button.pushed === true){
      return (
        <Card height={Dimensions.get('window').height / 3}>
            <Text> This will show up on pin push </Text>
        </Card>
      )
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
              }} iconName={"location"} />
            <OptionsBarButton onPress={() => {
              //console.log('click new location')
            }} iconName={"add"} />
            <OptionsBarButton onPress={() => {
              //console.log('click user info')
            }} iconName={"user"} />
          </LocationHomeOptionsBar>
        </View>

       <Button title="test" onPress={this.onPinPush}>Pin</Button>

        <View style={styles.bottomButtons}>{bottomButtonStatus}</View>
        <View style={styles.searchContainer}>
            <View style={{ flexDirection: 'row'}}>
              <SearchBar />
              <LocationHomeBottomButton onPress={this._toggleOverlay.bind(this)} />
            </View>
            {this.showCard()}
        </View>
        {this.state.overlay ? <View style={[styles.overlay]} /> : <View style={styles.searchContainer} />}
      </MapView>
    )
  }
}

function mapStateToProps(state){
  return {
    button: state.button
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        pinPush
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationHome)