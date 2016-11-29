import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'
import { styles } from './styles'


class BottomButtonListButton extends Component {
    static propTypes = {

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
                    <Text style={styles.icon}>L</Text>
                </View>
            </TouchableHighlight>
            </View>
        )
    }
}

export default BottomButtonListButton
