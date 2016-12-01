import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    locationContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 140,
    },
    map:{
        height: 120,
        width: 120,
        borderWidth: 2,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationDetails: {
        paddingRight: 2,
        margin: 10
    }
})