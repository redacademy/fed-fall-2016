import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 85,
        width: 85,
        borderRadius: 42.5,
    },
    buttonDefault: {
        backgroundColor: colors.white,
    },
    buttonSelected: {
        backgroundColor: colors.darkPeach,
    },
    icon: {
        fontSize: 60,
    },
    iconDefault: {
        color: colors.warmGrey,
    },
    iconSelected: {
        color: colors.white,
    },
})
