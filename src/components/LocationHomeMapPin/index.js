import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableOpacity,
} from 'react-native'
import styles from './styles'
import { colors } from '../../config/styles'

class LocationHomeMapPin extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
                    <View style={styles.button}>
                        {/* <Icon style={styles.icon} name="filter-list" size={60} color={colors.warmGrey} /> */}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LocationHomeMapPin
