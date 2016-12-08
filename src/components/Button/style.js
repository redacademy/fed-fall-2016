import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: width * 0.80,
        borderRadius: 30,
        backgroundColor: '#a3c56d',
        shadowColor: 'darkgrey',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0.2, height: 1, },
        shadowRadius: 2,
        alignSelf: 'center',
    }
})
export default styles