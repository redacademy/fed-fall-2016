import { StyleSheet, Dimensions } from 'react-native'

const { width, height, } = Dimensions.get('window')

export const styles = StyleSheet.create({
    Container: {
        height: height,
        flexGrow: 1,
        top: 0,
        position: 'absolute'
    },
    button: {
        height: 45,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 22,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
})