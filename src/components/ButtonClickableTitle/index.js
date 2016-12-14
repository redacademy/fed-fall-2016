import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import styles from './styles'
import Icon from '../Icon/index'
import { colors, textStyles} from '../../config/styles'

class BottomButtonFilterButton extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        iconName: PropTypes.string.isRequired,
        iconSize: PropTypes.number.isRequired,
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <View style={styles.bar}>
                        <Text style={textStyles.textStyle16}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <View style={styles.button}>
                        <Icon style={styles.icon} name={this.props.iconName} size={this.props.iconSize} color={colors.warmGrey} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default BottomButtonFilterButton
