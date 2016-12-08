import React from 'react'
<<<<<<< b3b440e2c74c25919abf41639163bb70aa95eee5
import { TouchableHighlight } from 'react-native'
import styles from './style'

const Button = ({ children }) => {
    return (
        <TouchableHighlight underlayColor={'#8cb649'} style={styles.button} onPress={() => {}}>
            {children}
        </TouchableHighlight>
=======
import { View } from 'react-native'
import { styles } from './style'

const Button = ({ children }) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                {children}
            </View>
        </View>
>>>>>>> resolved conflicts
    )
}

export default Button