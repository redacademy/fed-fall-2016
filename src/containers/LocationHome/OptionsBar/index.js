import React, { Component } from 'react'
import {
    View
} from 'react-native'
import styles from './styles'

class OptionsBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

export default OptionsBar
