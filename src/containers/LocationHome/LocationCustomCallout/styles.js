import {
    StyleSheet,
} from 'react-native'
import { colors, shadows } from '../../../config/styles'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: colors.white,
        paddingVertical: 12,
        borderRadius: 12,
        borderColor: colors.white,
        borderWidth: 0.5,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,

    },
    amount: {
        flex: 1,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: colors.white,
        alignSelf: 'center',
        marginTop: -32,
        zIndex: -10,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: colors.white,
        alignSelf: 'center',
        marginTop: -0.5,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity - 0.2,
        shadowOffset: { width: shadows.offset.width, height: 5 },
        shadowRadius: shadows.radius,
    },
})
