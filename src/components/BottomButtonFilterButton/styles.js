import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 160,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
    },
    bar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 40,
        width: 85,
        borderRadius: 18,
        shadowColor: 'lightgrey',
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: -2 },
        shadowRadius: 3,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 30,
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
