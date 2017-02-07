import { StyleSheet } from 'react-native'
import { cardWidth, cardHeight, } from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: cardWidth,
    },
    text: {
        flex: 1,
        width: cardWidth,
        height: 25,
    },
    stretch: {
        width: cardWidth,
        height: cardHeight*.8,
    },
})

export default styles
