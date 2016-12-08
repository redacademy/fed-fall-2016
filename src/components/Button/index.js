import React from 'react'
import { TouchableHighlight } from 'react-native'
import styles from './style'
import { colorPalette } from '../../config/styles'

const Button = ({ children }) => {
    return (
        <TouchableHighlight underlayColor={colorPalette.lightGreyGreenTwo.hex} style={[styles.button]} onPress={() => {}}>
            {children}
        </TouchableHighlight>
    )
}

export default Button