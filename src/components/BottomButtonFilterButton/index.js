import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'
import { styles } from './styles'
import Icon from '../Icon/index'


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
                        <Icon style={styles.icon} name="filter" size={60} color="lightgrey" />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default BottomButtonFilerButton
