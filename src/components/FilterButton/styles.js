import { StyleSheet } from 'react-native'
import { colors, buttonSize } from '../../config/styles'

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: buttonSize.filterButton,
        width: buttonSize.filterButton,
        borderRadius: buttonSize.filterButton*0.5,
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
