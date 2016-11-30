import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'
import { styles } from './styles'
import Icon from '../Icon/index'

class OptionsBarButton extends Component {
    static propTypes = {

    }
    render() {
        return (
            <View>
            <TouchableHighlight style={styles.box} onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Icon style={styles.icon} name="location" size={60} color="lightgrey" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.box} onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Icon style={styles.icon} name="add" size={60} color="lightgrey" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.box} onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Icon style={styles.icon} name="history" size={60} color="lightgrey" />
                </View>
            </TouchableHighlight>
            </View>
        )
    }
}

export default OptionsBarButton
