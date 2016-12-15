import { StyleSheet, Dimensions } from 'react-native'
import { colors, padding, shadows } from '../../config/styles'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.whiteThree,
        height: height * 0.925,
        marginTop: padding.deviceTop,
        marginRight: padding.right,
        marginLeft: padding.left,
        marginBottom: padding.deviceBottom,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
        padding: padding.deviceLeft,
        width: width * 0.945,
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
    },
    CardContent: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
    },
    cardPuller: {
        width: width * 0.11,
        borderRadius: width * 0.11 * 0.4,
        height: width * 0.11 * 0.5 * 0.3,
        marginBottom: 6,
        marginTop: -10,
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles
