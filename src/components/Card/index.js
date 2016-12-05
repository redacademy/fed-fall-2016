import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const Card = ({ children }) => (
        <View style={styles.CardContainer}>
            <View style={styles.CardContent}>
                {children}
            </View>
        </View>
)

export default Card