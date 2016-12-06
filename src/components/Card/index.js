import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Card = ({ children }) => (
    <View style={styles.CardContainer}>
        <View style={styles.CardContent}>
            {children}
        </View>
    </View>
)

export default Card