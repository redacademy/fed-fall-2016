import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.warmGrey,
    },
    title: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.warmGrey,
    },
})

export default styles
