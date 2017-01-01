import { StyleSheet } from 'react-native'
import { colors, cardWidth } from '../../config/styles'

const styles = StyleSheet.create({
    locationContainer: {
        flex: 1,
        width: cardWidth,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.lightGrey,
    },
    map: {
        height: 100,
        width: cardWidth/3,
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
        minWidth: 158,
        maxWidth: 158,
    },
    unsavedMap: {
        height: 100,
        width: 262,
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles
