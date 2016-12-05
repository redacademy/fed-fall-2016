import { StyleSheet, Dimensions } from 'react-native'

const { width, height, } = Dimensions.get('window')

export const styles = StyleSheet.create({
    Container: {
        height: height,
        flexGrow: 1,
        top: 0,
        position: 'absolute'
    },
    CardContainer: {
        backgroundColor: 'white',
        height: 600,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 30,
        shadowColor: 'darkgrey',
        shadowOpacity: 1,
        shadowOffset: { width: 0.2, height: 1, },
        shadowRadius: 2,
        padding: 20,
        width: Dimensions.get('window').width * 0.945,
        borderRadius: 12
    },
    CardContent: {
        flex: 1,
    },
    button: {
        height: 45,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 22,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
})