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
        borderWidth: 1,
        borderColor: 'red',
    },
    map: {
        height: 120,
        width: 120,
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
         borderWidth: 1,
        borderColor: 'red',
    },
    // detailsContainer: {
    //     padding: 5,
    //      borderWidth: 1,
    //     borderColor: 'red',
    // },
    locationTitle: {
        marginTop: 1,
        height: 20,
        maxWidth: 200,
        marginLeft: 3,
        fontSize: 18,
        color: colors.darkGreyBlue,
    },
    locationDetails: {
        height: 30,
        // marginLeft: 3,
        paddingTop: 3,
        paddingBottom: 3,
        color: colors.lightGrey,
         borderWidth: 1,
        borderColor: 'red',
    },
    ratingBar: {
        // margin: 1,
        height: 40,
    },
})

export default styles
