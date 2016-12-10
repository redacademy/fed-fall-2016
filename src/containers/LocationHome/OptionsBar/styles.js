import { StyleSheet } from 'react-native'
import { colors } from '../../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 250,
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.whiteTwo,
        height: 60,
        width: 60,
        borderRadius: 30,
        shadowColor: colors.warmGrey,
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: -2 },
        shadowRadius: 3,
    },
    icon: {
        color: colors.warmGrey,
        fontSize: 30,
    },
})

export default styles
