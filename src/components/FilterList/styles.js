import { StyleSheet } from 'react-native';
import { colors, cardWidth, padding } from '../../config/styles'
export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    iconContainer: {
        flex: 0.5,
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    showFilterOnlyIfTrueIconContainer: {
        flex: 1/3,
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    //for the "tap to select filter" text at the top of the screen
    instructions: {
        color: colors.warmGreyTwo,
        padding: padding.top,
    },
})
