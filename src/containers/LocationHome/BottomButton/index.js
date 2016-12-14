import React, { Component } from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import Icon from '../../../components/Icon/index'
import { colors } from '../../../config/styles'

class BottomButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
                    <View style={styles.button}>
                        <Icon style={styles.icon} name='filter-list' size={60} color={colors.warmGrey} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default BottomButton
