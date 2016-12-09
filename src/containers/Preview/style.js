import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../config/styles'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    Container: {
        height: height,
        flexGrow: 1,
        top: 0,
        position: 'absolute'
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
})