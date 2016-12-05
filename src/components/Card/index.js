import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const Card = ({ children, height }) => (
        <View style={[styles.CardContainer, {height: height }]}>
            <View style={{overflow: 'hidden'}}>
                {children}
            </View>
        </View>
)

export default Card