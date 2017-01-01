import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './style.js'
import AddressBlock from '../../components/AddressBlock'
import { connect } from 'react-redux'
import { textStyles } from '../../config/styles'
import RatingButton from '../RatingButton'
import {
    submitRating,
    setSelectedCard,
    generateMapPins,
} from '../../redux/actions'
import Button from '../../components/Button'
import CardHeaderTitle from '../../components/CardHeaderTitle'

class LocationRating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: 0
        }

        this.ratees = [
            { attribute: 'quality', iconName: 'quality-ribbon', title: 'QUALITY' },
            { attribute: 'cleanliness', iconName: 'cleanliness', title: 'CLEAN' },
            { attribute: 'nursingFriendly', iconName: 'breast-feeding', title: 'NURSING FRIENDLY' },
            { attribute: 'quiet', iconName: 'quiet', title: 'QUIET' }
        ]
    }

    _submitRating() {
        const rating = {
            rating: {
                userId: 'robo',
                quality: this.props.quality ? 3 : 1,
                clean: this.props.clean ? 3 : 1,
                nursing: this.props.nursing ? 3 : 1,
                quiet: this.props.quiet ? 3 : 1,
            }
        }
        this.props.submitRating(this.props.placeid, rating)
        this.props.setSelectedCard('LocationPreview', this.props.placeid)
        generateMapPins()

    }
    //<AddressBlock title={this.props.place.place} addressLine1={this.props.place.line1} addressLine2={this.props.place.line2}/>
    render() {
        const result = this.props.locationList[0]
        const lat = result.geometry.location.lat
        const lng = result.geometry.location.lng
        const address = result.formatted_address
        const addressArray = address.split(',')
        let title = '', addressLine1 = '', addressLine2 = ''

        if (addressArray[0]) title = addressArray[0]
        if (addressArray[1]) addressLine1 = addressArray[1]
        if (addressArray[2]) addressLine2 = addressArray[2]
        if (addressArray[3]) addressLine2 = addressLine2 + addressArray[3]

        return (
            <View style={styles.cardContainer}>
                <CardHeaderTitle title={"Please rate"} />
                <ScrollView>
                    <AddressBlock title={title} addressLine1={addressLine1} addressLine2={addressLine2} />
                    <View style={styles.rateContainer}
                        onLayout={(event) => {
                            if (!this.props.size) {
                                this.setState({ size: event.nativeEvent.layout.width * 0.433 })
                            }
                        }
                        }
                        >
                        {
                            this.ratees.map((ratee, index) => {
                                return <View style={[styles.ratingButton, { marginBottom: 10 }]} key={index}>
                                    <RatingButton size={this.state.size} style={styles.ratingButton} rateeTitle={ratee.title} attribute={ratee.attribute} iconName={ratee.iconName} />
                                </View>
                            })
                        }
                    </View>

                    <Button onPressFn={this._submitRating.bind(this)} style={styles.submitButton}>
                        <Text style={textStyles.textStyle4}>SUBMIT</Text>
                    </Button>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    placeid: state.card.placeid,
    place: state.map,
    quality: state.button.quality,
    clean: state.button.cleanliness,
    nursing: state.button.nursingFriendly,
    quiet: state.button.quiet,
    locationList: state.map.locationList,
})

const mapDispatchToProps = {
    submitRating,
    setSelectedCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationRating)