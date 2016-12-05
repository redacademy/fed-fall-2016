import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightgrey',
    },
    title: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    }
})