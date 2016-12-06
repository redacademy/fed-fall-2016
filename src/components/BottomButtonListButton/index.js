import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native'
import styles from './styles'
import Icon from '../Icon/index'

class BottomButtonListButton extends Component {
    static propTypes = {
        onPress: PropTypes.func,
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.box} onPress={this.props.onPress}>
                    <View style={styles.bar}>
                        <Text style={styles.icon}>List</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.box} onPress={this.props.onPress}>
                    <View style={styles.button}>
                        <Icon style={styles.icon} name="sort-list" color='lightgrey' />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default BottomButtonListButton
