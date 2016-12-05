import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    locationContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5
    },
    map:{
        height: 120,
        width: 120,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        flex: 1,
    },
    locationTitle: {
        marginLeft: 3,
        fontSize: 18,
        color: 'rgb(45, 76, 96)',
    },
    locationDetails: {
        marginLeft: 3,  
        paddingTop: 3,
        paddingBottom: 3,
        color: 'rgb(127, 127, 127)',
        
    }
})