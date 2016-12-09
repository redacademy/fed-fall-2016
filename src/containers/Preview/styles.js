import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../config/styles'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    Container: {
        height: height,
        flexGrow: 1,
        top: 0,
        position: 'absolute',
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardText: {
        flex: 1,    
    }
})

export default styles
