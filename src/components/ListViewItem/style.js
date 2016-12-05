import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    locationContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    map:{
        height: 120,
        width: 120,
        borderWidth: 2,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        flex: 1,
        paddingRight: 2,
    },
    locationTitle: {
        margin: 10,
        fontSize: 18,
        color: 'rgb(45, 76, 96)',
    },
    locationDetails: {
        paddingRight: 2,
        marginLeft: 10,
        
    }
})