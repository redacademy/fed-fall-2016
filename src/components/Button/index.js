import React from 'react'
import { View } from 'react-native'
import { styles } from './style'

const Button = ({ children }) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                {children}
            </View>
        </View>
    )
}

export default Button