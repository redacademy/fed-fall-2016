import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: 'center', //icon
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 25,
        shadowColor: 'lightgrey',
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: -2 },
        shadowRadius: 3,
    },
    icon: {
        color: 'grey',
        fontSize: 20,
    },
})

export default styles
