import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import IconMulti from '../../components/IconMulti'
import styles from './styles'

class HalfButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer} >
                    <TouchableOpacity onPress={this.props.onPressTopFn}>
                        <IconMulti style={{ width: 130}} iconColor="white" size={50} name='thumbs-up'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={this.props.onPressBottomFn}>
                        <IconMulti style={{ width: 130}} iconColor="white" size={50} name='thumbs-down' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HalfButton