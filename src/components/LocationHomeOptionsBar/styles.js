import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 250,
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: 'lightgrey',
        borderWidth: 1,
    },
    icon: {
        color: 'grey',
        fontSize: 30
    },
})