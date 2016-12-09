import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../config/styles'
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
        shadowOpacity: 0.5,
        shadowOffset: { width: 0.2, height: 1 },
        shadowRadius: 2,
        alignSelf: 'center',
    },
})

export default styles