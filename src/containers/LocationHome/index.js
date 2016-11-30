import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { styles } from './style'
import { Text, View, Button } from 'react-native'
import SearchBar from '../SearchBar/index'
import Card from '../../components/Card'
import { pinPush } from '../../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LocationHome extends Component {
  constructor(props){
    super(props)

    this.onPinPush = this.onPinPush.bind(this)
  }

  onPinPush(){
    this.props.pinPush()
  }
  
  render() {
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
        <Button title="test" onPress={this.onPinPush}>Pin</Button>
        <View style={styles.searchContainer}>
          <SearchBar />
          <Card style={{ flex: 1 }} height={260}>
            <Text> This will show up on pin push </Text>
          </Card>
        </View>
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
