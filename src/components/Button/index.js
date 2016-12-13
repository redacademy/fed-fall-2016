import React from 'react'
import { TouchableHighlight } from 'react-native'
import styles from './style'

import { colors } from '../../config/styles'

const Button = ({ children, onPressFn }) => {
    return (
        <TouchableHighlight onPress={onPressFn} underlayColor={colors.lightGreyGreenTwo} style={[styles.button]}>
            {children}
        </TouchableHighlight>
    )
}

export default Button