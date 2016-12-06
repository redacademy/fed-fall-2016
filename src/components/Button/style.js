import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        flex: 1
    },
    button: {
        height: 45,
        width: width * 0.80,
        borderRadius: 30,
        backgroundColor: '#a3c56d',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: 'darkgrey',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0.2, height: 1, },
        shadowRadius: 2,
    }
})