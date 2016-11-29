import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'
import { styles } from './styles'


class OptionsBarButton extends Component {
    static propTypes = {

    }
    render() {
        return (
            <TouchableHighlight style={styles.box} onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.icon}>R
                        </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default OptionsBarButton
