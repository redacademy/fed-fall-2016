import React, { Component } from 'react'
import { View, Animated, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import {
    exitPreview,
    getLocationDetails,
    setCardPosition,
    enterRateLocation,
    rate,
    unrate,
} from '../../redux/actions'
import styles from './styles'
import { Card, AddressBlock, Button } from '../../components'
import { textStyles } from '../../config/styles'
import IconOptionalTitleRectangularBorder from '../../icons/IconOptionalTitleRectangularBorder'
import IconOptionalTitleRectangularFill from '../../icons/IconOptionalTitleRectangularFill'
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
        if (this.props.cardPosition === 420){
          return null
        }

        this.props.setCardPosition('full')
    }

    _onSwipeDown(){
        if (this.props.cardPosition === 0){
            this.props.setCardPosition('half')
        } else if (this.props.cardPosition === 340){
            this.props.setCardPosition('hidden')
            setTimeout(() => {
                this.props.exitPreview()
            }, 375)
        }  
    }

    // use a closure
    _rate(prop){
        var self = this
        return function(){
            self.props.rate({prop: prop, value: true})
        }
    }

    _unrate(prop){
        var self = this
        return function(){
            self.props.unrate({prop: prop, value: false})
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
                        {this.props.rateLocation ? null : <Text onPress={this.props.enterRateLocation}>Rate Icon</Text>}
                        {this.props.rateLocation ? 
                            <View style={{flex: 1}} >
                                <AddressBlock title={this.props.place.place} addressLine1={this.props.place.line1} addressLine2={this.props.place.line2}/>
                                
                                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: 50 }}>
                                {this.props.quality ? <IconOptionalTitleRectangularFill onPressFn={this._unrate('quality')} size={130} backgroundColor="#aecc83" iconName="quality-ribbon" />
                                : <IconOptionalTitleRectangularBorder onPressFn={this._rate('quality')} size={125} iconColor="#e28385" iconName="quality-ribbon"/>}

                                {this.props.cleanliness ? <IconOptionalTitleRectangularFill onPressFn={this._unrate('cleanliness')} size={125} backgroundColor="#aecc83" iconName="cleanliness" />
                                : <IconOptionalTitleRectangularBorder onPressFn={this._rate('cleanliness')} size={125} iconColor="#e28385" iconName="cleanliness"/>}

                                {this.props.nursingFriendly ? <IconOptionalTitleRectangularFill onPressFn={this._unrate('nursingFriendly')} size={125} backgroundColor="#aecc83" iconName="breast-feeding" />
                                : <IconOptionalTitleRectangularBorder onPressFn={this._rate('nursingFriendly')} size={125} iconColor="#e28385" iconName="breast-feeding"/>}

                                {this.props.quiet ? <IconOptionalTitleRectangularFill onPressFn={this._unrate('quiet')} size={125} backgroundColor="#aecc83" iconName="quiet" />
                                : <IconOptionalTitleRectangularBorder onPressFn={this._rate('quiet')} size={125} iconColor="#e28385" iconName="quiet"/>}
                                
                                </View>
                    
                                <Button style={{ alignSelf: 'flex-end' }}>
                                    <Text style={textStyles.textStyle4}>SUBMIT</Text>
                                </Button>
                            </View>
                        : this.props.children}
                    </Card>
                 </Animated.View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    locationDetails: state.map.locationDetails,
    place: state.map,
    placeid: state.button.placeid,
    cardPosition: state.card.cardPosition,
    rateLocation: state.button.rateLocation,
    quality: state.button.quality,
    cleanliness: state.button.cleanliness,
    nursingFriendly: state.button.nursingFriendly,
    quiet: state.button.quiet,
})

const mapDispatchToProps = {
    exitPreview,
    getLocationDetails,
    setCardPosition,
    enterRateLocation,
    rate,
    unrate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
