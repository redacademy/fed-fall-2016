import {
    StyleSheet,
} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 250,
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(253, 253, 253)',
        height: 60,
        width: 60,
        borderRadius: 30,
        shadowColor: 'lightgrey',
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: -2, },
        shadowRadius: 3,
    },
    icon: {
        color: 'grey',
        fontSize: 30,
    },
})