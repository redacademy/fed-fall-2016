import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableHighlight,
    Text,
} from 'react-native'
import { styles } from './styles'


class LocationHomeOptionsBar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton}><Text style={styles.button}>R</Text></TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton}><Text style={styles.button}>A</Text></TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton}><Text style={styles.button}>P</Text></TouchableHighlight>
            </View>
        )
    }
}

export default LocationHomeOptionsBar
