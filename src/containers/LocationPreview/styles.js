import { StyleSheet } from 'react-native'
import { padding, colors } from '../../config/styles'

const styles = StyleSheet.create({
    spacer: {
        flex: 1,
        paddingBottom: padding.bottom,
    },
    amenitiesContainer: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: padding.top,
        paddingBottom: padding.bottom,
        borderRadius: 12,
        alignItems: 'flex-start',
    },
})

export default styles
