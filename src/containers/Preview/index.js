import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import { connect } from 'react-redux'
import {
    exitPreview,
    exitLocationAdd,
    getLocationDetails,
    setCardPosition
} from '../../redux/actions'
import styles from './styles'
import { Card } from '../../components'


class Preview extends Component {
    constructor(props){
        super(props)

        this.position = new Animated.Value(this.props.cardPosition)
    }

    componentWillMount() {
        this.currentState = 'card'
        this.avCardY = new Animated.Value(340)
        this.gesturePosY = null
        this.gestureThreshold = 75
        this.avPosition = new Animated.Value(0)
        this.animationDuration = 600
        this.props.getLocationDetails(this.props.placeid)
    }

    componentWillUpdate(nextProps, nextState){
        if (nextProps.cardPosition !== this.props.cardPosition){
            Animated.timing(this.position, {
            toValue: nextProps.cardPosition,
            duration: this.animationDuration,
        }).start()
        }
    }

    _detectSwipe(y) {
        if (this.gesturePosY - y >= this.gestureThreshold) {
            this._onSwipeUp()
        } else if (y - this.gesturePosY >= this.gestureThreshold) {
            this._onSwipeDown()
        }
    }

    _onSwipeUp() {
        this.props.setCardPosition('full')
    }

    _onSwipeDown(){
        if (this.props.cardPosition === 0){
            this.props.setCardPosition('half')
        } else if (this.props.cardPosition === 340){
            this.props.setCardPosition('hidden')
            setTimeout(() => {
                this.props.exitPreview()
                this.props.exitLocationAdd()
            }, 375)
        }   
    }
    
    render() {
        const cardAnimation = { transform: [{ translateY: this.position }] }
        return (
            <View style={styles.Container}>
                <Animated.View
                    style={cardAnimation}
                    onResponderRelease={(e) => {
                        this._detectSwipe(e.nativeEvent.locationY)
                        return true
                    }}
                    onStartShouldSetResponder={(e) => {
                        this.gesturePosY = e.nativeEvent.locationY
                        return true
                    }}
                 >
                    <Card>
                        {this.props.children}
                    </Card>
                 </Animated.View>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    locationDetails: state.map.locationDetails,
    placeid: state.button.placeid,
    cardPosition: state.card.cardPosition,
})

const mapDispatchToProps = {
    exitPreview,
    getLocationDetails,
    exitLocationAdd,
    setCardPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
