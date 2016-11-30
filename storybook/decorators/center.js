import React from 'react'
import { View, } from 'react-native'

const container = { flex: 1, justifyContent: 'center', alignItems: 'center'}

const CenterDecorator = (story) => (
    <View style={container}>
        {story()}
    </View>
)

export default CenterDecorator