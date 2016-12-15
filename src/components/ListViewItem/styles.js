import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../config/styles'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    locationContainer: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.lightGrey,
    },
    map: {
        height: 120,
        width: 120,
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationTitle: {
        marginTop: 1,
        height: 20,
        maxWidth: 200,
        marginLeft: 3,
        fontSize: 18,
        color: colors.darkGreyBlue,
    },
    locationDetails: {
        height: 25,
        paddingTop: 3,
        paddingBottom: 3,
        color: colors.lightGrey,
    },
    ratingBar: {
        height: 40,
        minWidth: 180,
        maxWidth: 180,

    },
})

export default styles
