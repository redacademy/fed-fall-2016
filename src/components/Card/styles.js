import { StyleSheet, Dimensions } from 'react-native'
import { colors, padding, shadows, w, h, width } from '../../config/styles'

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.whiteThree,
        height: h,
        width: w,
        marginTop: padding.deviceTop,
        marginRight: padding.right,
        marginLeft: padding.left,
        marginBottom: padding.deviceBottom,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
        padding: padding.deviceLeft,
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
