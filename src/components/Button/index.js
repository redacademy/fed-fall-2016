import React, { Component, PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'

import { colors } from '../../config/styles'

class Button extends Component {
    static propTypes = {
        onPress: PropTypes.func,
    }
    constructor(props) {
        super(props)
        this._handlePress = this._handlePress.bind(this)
    }
    _handlePress() {
        if (this.props.onPress)
            this.props.onPress()
        if (this.props.onPressFn)
            this.props.onPressFn()
    }
    render() {
        return (
            <TouchableOpacity underlayColor={colors.lightGreyGreenTwo} style={[styles.button]} onPress={() => this._handlePress()}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

export default Button