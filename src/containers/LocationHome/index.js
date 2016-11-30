import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { styles } from './style'
import { Text, View, Button, PanResponder, ScrollView, Animated } from 'react-native'
import SearchBar from '../SearchBar/index'
import Card from '../../components/Card'
import { pinPush } from '../../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LocationHome extends Component {
  constructor(props){
    super(props)

    this.state = {
      scroll: true,
      pan: new Animated.ValueXY()
    }

    this.onPinPush = this.onPinPush.bind(this)
    this.showCard = this.showCard.bind(this)
  }

  onPinPush(){
    this.props.pinPush()
  }
  
  showCard(){
    if(this.props.button.pushed == true){
      return (
        <ScrollView 
          scrollEnabled={this.state.scroll}                      
        >
          <Animated.View 
            style={{transform: this.state.pan.getTranslateTransform(), position: 'absolute', left: 20, top: 20}}
            {...this._panResponder.panHandlers}
          >
            <Card style={{ flex: 1 }} height={260}>
                <Text> This will show up on pin push </Text>
            </Card>
          </Animated.View>
        </ScrollView>
      )
    }
  }
  
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: () => this.setState({scroll: false}),
      onPanResponderMove: Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y}]),
        onPanResponderRelease: () => this.setState({scroll: true})
    })
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
          {this.showCard()}
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
