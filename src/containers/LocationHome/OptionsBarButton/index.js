import React, { Component } from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import { colors } from '../../../config/styles'
import Icon from '../../../components/Icon/index'

class OptionsBarButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.button}>
                        <Icon style={styles.icon} name={this.props.iconName} size={60} color={colors.warmGrey} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default OptionsBarButton
