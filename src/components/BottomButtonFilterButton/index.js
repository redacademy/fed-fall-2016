import React, { Component, PropTypes } from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import styles from './styles'
import Icon from '../Icon/index'
import { colors } from '../../config/styles'

class BottomButtonFilterButton extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <View style={styles.bar}>
                        <Text style={styles.icon}>Filter
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <View style={styles.button}>
                        <Icon style={styles.icon} name='filter' size={60} color={colors.warmGrey} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default BottomButtonFilterButton
