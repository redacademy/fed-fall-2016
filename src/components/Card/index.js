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



/*
import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const Card = ({height}) => (
        <View style={[styles.CardContainer, {height: height }]}>
            <View style={{overflow: 'hidden'}} >
                {this.props.children}
            </View>
        </View>
)

export default Card
*/