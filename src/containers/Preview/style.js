import { StyleSheet, Dimensions } from 'react-native'

const { width, height, } = Dimensions.get('window')

export const styles = StyleSheet.create({
    Container: {
        height: height,
        flexGrow: 1,
        top: 0,
        position: 'absolute'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})