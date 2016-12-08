import React from 'react'
import { TouchableHighlight } from 'react-native'
import styles from './style'

const Button = ({ children }) => {
    return (
        <TouchableHighlight underlayColor={'#8cb649'} style={styles.button} onPress={() => {}}>
            {children}
        </TouchableHighlight>
    )
}

export default Button