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
                {this.props.children}
            </View>
        )
    }
}

export default LocationHomeOptionsBar
