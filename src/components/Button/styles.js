import { StyleSheet, Dimensions } from 'react-native'
import { colors, shadows } from '../../config/styles'
const { width, height } = Dimensions.get('window')
const   h=height*0.078,
        w = width*0.77

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: h,
        width: w,
        borderRadius: h/2,
        backgroundColor: colors.lightGreyGreen,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
        alignSelf: 'center',
    },
})

export default styles