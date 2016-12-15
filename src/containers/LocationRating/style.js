import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardText: {
        flex: 1,
    },
    rateContainer: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    submitButton: {
        alignSelf: 'flex-end',
    },
    ratingButton: {
        // flex: 1,
        height: 150,
        width: 150,
    }
})

export default styles