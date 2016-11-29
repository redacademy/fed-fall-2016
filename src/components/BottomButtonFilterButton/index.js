import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'
import { styles } from './styles'


class BottomButtonFilerButton extends Component {
    static propTypes = {

    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.onPress}>
                    <View style={styles.bar}>
                        <Text style={styles.icon}>Filter
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onPress}>
                    <View style={styles.button}>
                        <Text style={styles.icon}>F
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default BottomButtonFilerButton
