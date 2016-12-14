import React, { Component } from 'react'
import { View, Animated, Text } from 'react-native'
import { connect } from 'react-redux'
import {
    exitPreview,
    getLocationDetails,
    setCardPosition,
    enterRateLocation,
    submitRating,
} from '../../redux/actions'
import styles from './styles'
import { Card, AddressBlock, Button, CardHeaderTitle } from '../../components'
import { textStyles } from '../../config/styles'
import { RatingButton } from '../../containers'

class Preview extends Component {
    constructor(props){
        super(props)

        this.position = new Animated.Value(this.props.cardPosition)
        this.ratees = [
            { attribute: 'quality', iconName: 'quality-ribbon', title: 'QUALITY'},
            { attribute: 'cleanliness', iconName: 'cleanliness', title: 'CLEAN'},
            { attribute: 'nursingFriendly', iconName: 'breast-feeding', title: 'NURSING FRIENDLY'},
            { attribute: 'quiet', iconName: 'quiet', title: 'QUIET'}                            
        ]
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
    
    _submitRating(){
        const rating = {
            rating: {
                userId: 'FACETOES',
                quality: this.props.quality ? 3 : 1,
                clean: this.props.cleanliness ? 3 : 1,
                nursing: this.props.nursing ? 3 : 1,
                quiet: this.props.quiet ? 3 : 1,
            }
        }
        this.props.submitRating(this.props.placeid, rating)
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
                        {this.props.rateLocation ? <CardHeaderTitle amenities={{nursingRoom: true}} title="Please rate" /> : null}
                        
                        
                        {this.props.feedback ? <Text>Thank you for your rating.</Text> : null}
                        {this.props.rateLocation ? null : <Text onPress={this.props.enterRateLocation}>Rate Icon</Text>}
                        {this.props.rateLocation ? 
                            <View style={styles.cardContainer}>
                                <AddressBlock title={this.props.place.place} addressLine1={this.props.place.line1} addressLine2={this.props.place.line2}/>
                                
                                <View style={styles.rateContainer}>
                                {
                                    this.ratees.map((ratee) => {
                                        return <View style={styles.ratingButton}>
                                            <RatingButton style={styles.ratingButton} rateeTitle={ratee.title} attribute={ratee.attribute} iconName={ratee.iconName} />
                                        </View>
                                    })
                                }
                                </View>
                                
                                <Button onPressFn={this._submitRating.bind(this)} style={styles.submitButton}>
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
    feedback: state.button.feedback,
})

const mapDispatchToProps = {
    exitPreview,
    getLocationDetails,
    setCardPosition,
    enterRateLocation,
    submitRating,
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
