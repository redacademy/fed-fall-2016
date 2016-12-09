import {
    StyleSheet,
} from 'react-native'
import { colors } from '../../config/styles'

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
        // paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 12,
        borderColor: colors.white,
        borderWidth: 0.5,
        shadowColor: colors.warmGrey,
        shadowOpacity: 1,
        shadowOffset: { width: 0.2, height: 1 },
        shadowRadius: 1,
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
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: colors.white,
        alignSelf: 'center',
        marginTop: -0.5,
        shadowColor: colors.warmGrey,
        shadowOpacity: 1,
        shadowOffset: { width: 0.2, height: 1 },
        shadowRadius: 1,
    },
})