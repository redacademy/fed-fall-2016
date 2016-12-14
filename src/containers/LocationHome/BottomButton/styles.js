import { StyleSheet } from 'react-native'
import { buttonSize, colors, padding, shadows } from '../../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 250,
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: buttonSize.searchBar,
        width: buttonSize.searchBar,
        borderRadius: buttonSize.searchBar*0.5,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
        marginLeft: padding.left,
    },
    icon: {
        color: colors.warmGrey,
        fontSize: 30,

    },
})

export default styles
