import { StyleSheet, Dimensions } from 'react-native';
import { colorPalette } from '../../config/styles'
// const { width, height, } = Dimensions.get('window')

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 85,
        width: 85,
        borderRadius: 42.5,
    },
    buttonDefault: {
        backgroundColor: colorPalette.white.hex,
    },
    buttonSelected: {
        backgroundColor: colorPalette.darkPeach.hex,
    },
    icon: {
        fontSize: 60,
    },
    iconDefault: {
        color: colorPalette.warmGrey.hex,
    },
    iconSelected: {
        color: colorPalette.white.hex,
    },
})
