import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native'
import { styles } from './styles'


class LocationHomeBottomButton extends Component {
     static propTypes = {

    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
                    <View style={styles.button}>
                        <Text style={styles.icon}>Y
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LocationHomeBottomButton
