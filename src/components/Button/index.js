import React from 'react'
import { TouchableHighlight } from 'react-native'
import styles from './style'

import { colors } from '../../config/styles'

const Button = ({ children }) => {
    return (
        <TouchableHighlight underlayColor={colors.lightGreyGreenTwo} style={[styles.button]} onPress={() => {}}>
            {children}
        </TouchableHighlight>
    )
}

export default Button