import { StyleSheet } from 'react-native'
import { colors, buttonSize, iconSize, cardWidth, cardHeight, padding } from '../../config/styles'

export const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        height: (cardHeight / 4.8),
        width: cardWidth / 2,
        justifyContent: 'space-around',
    },
    noButtonContainerStyle: {
        alignItems: 'center',
        height: cardHeight / 4.25,
        width: cardWidth / 3,
        justifyContent: 'space-around',
    },
    noButton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: buttonSize.filterButton * 2 / 3,
        width: buttonSize.filterButton * 2 / 3,
    },
    noButtonText: {
        textAlign: 'center', 
    },
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: buttonSize.filterButton,
        width: buttonSize.filterButton,
        borderRadius: buttonSize.filterButton * 0.5,
    },
    buttonDefault: {
        backgroundColor: colors.white,
    },
    buttonSelected: {
        backgroundColor: colors.darkPeach,
    },
    icon: {
        fontSize: iconSize.filterButton,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconDefault: {
        color: colors.warmGrey,
    },
    iconSelected: {
        color: colors.white,
    },
})
