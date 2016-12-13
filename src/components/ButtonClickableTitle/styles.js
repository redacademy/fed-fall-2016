import { StyleSheet } from 'react-native'
import { colors, padding, buttonSize, shadows } from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bar: {
        marginRight: padding.right+(buttonSize.searchBar-buttonSize.listFilter)/2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: buttonSize.listFilter * 0.8,
        width: buttonSize.listFilter * 2 * 0.9,
        borderRadius: buttonSize.listFilter * 0.5 - buttonSize.listFilter * 0.2,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: buttonSize.listFilter,
        width: buttonSize.listFilter,
        borderRadius: buttonSize.listFilter * 0.5,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
    },
    icon: {
        color: colors.darkGreyBlue,
        fontSize: 20,
    },
})

export default styles
