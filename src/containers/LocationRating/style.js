import { StyleSheet } from 'react-native'
import { colors, cardWidth } from '../../config/styles'

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
        height: cardWidth*0.5,
        width: cardWidth*0.5,
    }
})

export default styles