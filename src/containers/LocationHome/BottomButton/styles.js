import { StyleSheet } from 'react-native'
import { colors, shadows, buttonSize } from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: buttonSize.searchBar,
        width: buttonSize.searchBar,
        borderRadius: buttonSize.searchBar/2,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
    },
    icon: {
        color: colors.warmGrey,
        fontSize: 30,

    },
})

export default styles
