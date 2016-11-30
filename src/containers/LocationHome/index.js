import React, { Component, } from 'react'
import MapView from 'react-native-maps'
import { styles, } from './style'
import { Text, View } from 'react-native'
import SearchBar from '../SearchBar/index'
import LocationHomeBottomButton from '../../components/LocationHomeBottomButton/index'
import BottomButtonFilterButton from '../../components/BottomButtonFilterButton/index'
import BottomButtonListButton from '../../components/BottomButtonListButton/index'


const Dimensions = require('Dimensions');
// We can use this to make the overlay fill the entire width
const { width, height } = Dimensions.get('window');

class LocationHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
    }
  }
  _toggleOverlay() {
    this.setState({
      overlay: !this.state.overlay,
    })
  }
  render() {
    let bottomButtonStatus = null
    if (this.state.overlay) {
      bottomButtonStatus = <View><BottomButtonListButton /><BottomButtonFilterButton /></View>
    }
    return (
      <MapView
        style={styles.container}
        region={{
          latitude: 49.263432,
          longitude: -123.137952,
          latitudeDelta: .01,
          longitudeDelta: .01,
        }}
        // showsUserLocation      // enable when not using simulator
        // followsUserLocation    // enable when not using simulator
        >
        <View style={styles.bottomButtons} >{bottomButtonStatus}</View>
        <View style={styles.searchContainer}>
          <SearchBar />
          <LocationHomeBottomButton onPress={this._toggleOverlay.bind(this)}/>
        </View>
        {this.state.overlay ? <View style={[styles.overlay]} /> : <View style={styles.searchContainer} />}
      </MapView>
    )
  }
}



export default LocationHome
