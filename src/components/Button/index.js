import React from 'react'
import { TouchableHighlight } from 'react-native'
import styles from './style'
<<<<<<< HEAD

const Button = ({ children }) => {
    return (
        <TouchableHighlight underlayColor={'#8cb649'} style={styles.button} onPress={() => {}}>
=======
import { colorPalette } from '../../config/styles'

const Button = ({ children }) => {
    return (
        <TouchableHighlight underlayColor={colorPalette.lightGreyGreenTwo.hex} style={[styles.button]} onPress={() => {}}>
>>>>>>> feature-locationadd
            {children}
        </TouchableHighlight>
    )
}

export default Button