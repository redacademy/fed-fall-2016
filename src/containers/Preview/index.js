import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import { exitPreview } from '../../redux/actions'
import styles from './styles'
import { Card, MapPin } from '../../components'
import { rgbColors } from '../../config/styles'
import { getLocationDetails } from '../../redux/actions'

class Preview extends Component {
  componentWillMount() {
    this.currentState = 'card'
    this.avCardY = new Animated.Value(340)
    this.gesturePosY = null
    this.gestureThreshold = 75
    this.avPosition = new Animated.Value(0)
    this.animationDuration = 600
    this.renderText = this.renderText.bind(this)
    console.log("mount", this.props.placeid)
    this.props.getLocationDetails(this.props.placeid)
  }

  _detectSwipe(y) {
    if (this.gesturePosY - y >= this.gestureThreshold) {
      this._onSwipeUp()
    } else if (y - this.gesturePosY >= this.gestureThreshold) {
      this._onSwipeDown()
    }
  }
  _onSwipeUp() {
    if (this.currentState === 'card') {
      setTimeout(() => this.currentState = 'list', 300)
      Animated.timing(this.avCardY, {
        toValue: 0,
        duration: this.animationDuration,
      }).start()
    } else if (this.currentState === 'search') {
      setTimeout(() => this.currentState = 'card', 300)
      Animated.timing(this.avCardY, {
        toValue: 300,
        duration: this.animationDuration,
      }).start()
    }
  }
  _onSwipeDown() {
    if (this.currentState === 'list') {
      setTimeout(() => this.currentState = 'card', 300)
      Animated.timing(this.avCardY, {
        toValue: 340,
        duration: this.animationDuration + 200,
      }).start()
    } else if (this.currentState === 'card') {
      setTimeout(() => this.currentState = 'search', 300)
      Animated.timing(this.avCardY, {
        toValue: 600,
        duration: this.animationDuration,
      }).start()
      setTimeout(() => this.props.exitPreview(), 400)
    }
  }

  renderText(){
       
    
  }
  

  render() {
    const cardAnimation = { transform: [{ translateY: this.avCardY }] }

    return (
      <View style={styles.Container}>
        <Animated.View
          style={cardAnimation}
          onStartShouldSetResponder={(e) => {
            this.gesturePosY = e.nativeEvent.locationY
          } }
          onMoveShouldSetResponder={(e) => this._detectSwipe(e.nativeEvent.locationY)}
          >
          <Card>
            {/* YOU CAN START ADDING CONTENT TO THE CARD IN HERE! */}
           <Text>{this.props.locationDetails.formatted_address}</Text>
          </Card>
        </Animated.View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  locationDetails: state.map.locationDetails,
  placeid: state.button.placeid
})
const mapDispatchToProps = {
  exitPreview,
  getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)