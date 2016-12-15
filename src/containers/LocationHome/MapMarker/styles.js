import { StyleSheet, Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
import { colors, buttonSize } from '../../../config/styles'

const styles = StyleSheet.create({
    mapContainer: {
        height: height,
    },

    locationAddContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: buttonSize.optionBar,
        width: buttonSize.optionBar,
        borderRadius: buttonSize.optionBar*0.5,
        borderColor: colors.blush,
        borderWidth: 2,
    },
    icon: {
        color: colors.blush,
        fontSize: 20,
    },
})

export default styles
