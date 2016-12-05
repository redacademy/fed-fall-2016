import React, { Component } from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import { styles } from './styles'
import Icon from '../Icon/index'

class OptionsBarButton extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Icon style={styles.icon} name={this.props.iconName} size={60} color='lightgrey' />
                </View>
            </TouchableOpacity>
            </View>
        )
    }
}

export default OptionsBarButton

