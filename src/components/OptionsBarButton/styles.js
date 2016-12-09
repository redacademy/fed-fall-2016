import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: 'center', //icon
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: 50,
        width: 50,
        borderRadius: 25,
        shadowColor: colors.warmGrey,
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: -2 },
        shadowRadius: 3,
    },
    icon: {
        color: colors.warmGrey,
        fontSize: 20,
    },
})

export default styles
