import React, { Component } from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import { styles } from './styles'
import Icon from '../Icon/index'


class LocationHomeBottomButton extends Component {
    static propTypes = {

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
                    <View style={styles.button}>
                        <Icon style={styles.icon} name="filter-list" size={60} color="lightgrey" />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LocationHomeBottomButton
