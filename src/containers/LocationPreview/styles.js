import { StyleSheet } from 'react-native'
import { padding } from '../../config/styles'

const styles = StyleSheet.create({
    filterContainer: {
        paddingTop: padding.deviceTop,
        paddingBottom: padding.deviceBottom,
    },
    buttonContainer: {
        paddingTop: padding.deviceTop,
        paddingBottom: padding.bottom,
    },
    ratingBar: {
        height: 40,
        minWidth: 180,
        maxWidth: 180,
    },
    amenitiesBar: {
        height: 20,
        minWidth: 350,
        maxWidth: 350,
    },
})

export default styles
