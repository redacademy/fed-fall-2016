import React, { Component, PropTypes, } from 'react'
import {
    View,
} from 'react-native'
import { styles } from './style'


class Card extends Component {
    static propTypes = {
        height: PropTypes.number.isRequired,
    }

    render() {
        return (
        <View style={[styles.CardContainer, {height: this.props.height, }]}>
                {this.props.children}
        </View>
        )
    }
}

export default Card
