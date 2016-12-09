import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../config/styles'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        height: height * 0.945,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 30,
        shadowColor: colors.warmGrey,
        shadowOpacity: 1,
        shadowOffset: { width: 0.2, height: 1 },
        shadowRadius: 2,
        padding: 20,
        width: width * 0.945,
        borderRadius: 12,
        flexDirection: 'column'
    },
    CardContent: {
         flexDirection: 'column',
         flex: 1,
         justifyContent: 'flex-end',
      }
})

export default styles
