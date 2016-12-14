import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'

import { colors } from '../../config/styles'

const Button = ({ children, onPressFn }) => {
    return (
        <TouchableOpacity underlayColor={colors.lightGreyGreenTwo} style={[styles.button]} onPress={() => {}}>
            {children}
        </TouchableOpacity>
    )
}

export default Button