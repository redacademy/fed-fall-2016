import React, { Component, } from 'react'
import {
    View,
} from 'react-native'
import { styles } from './styles'

class Card extends Component {

    render() {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.cardPuller} />
                {this.props.children}
            </View>
        )
    }
}

export default Card
