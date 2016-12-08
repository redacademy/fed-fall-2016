import React, { Component, PropTypes } from 'react'
import {
    View, Text
} from 'react-native'
import { styles } from './styles'
import RatingButton from '../RatingButton'

const iconSize = 170
const ratingButtons = [
    { iconName: 'quality-ribbon', text: 'QUALITY'},
    { iconName: 'cleanliness', text: 'CLEAN' },
    { iconName: 'breast-feeding', text: 'NURSING FRIENDLY' }, 
    { iconName: 'quiet', text: 'QUIET'}, ]

class RatingBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRatingIndex: 0,
        }
    }
    render() {
        return (
            <View style={styles.outerContainer}>
                <Text style={styles.instructions}>tap to select filter</Text>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        {
                                <RatingButton
                                    onPress={this.handleBathroomButtonOptionsLeftPress}
                                    iconName={ratingButtons[this.state.selectedRatingIndex].iconName}
                                    iconSize={iconSize} />
                        }
                        <Text>{ratingButtons[this.state.selectedRatingIndex].iconText}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default RatingBlock
