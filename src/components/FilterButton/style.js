import { StyleSheet, Dimensions } from 'react-native';
const { width, height, } = Dimensions.get('window')


export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: (height-20)/5.5, //122?
        width: (width-20)/2, //113?
        justifyContent: 'space-around',
    },
    buttonDefault: {
        backgroundColor: '#ffffff', 
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 85,
        width: 85,
        borderRadius: 42.5,
    },
    iconDefault: {
        color: 'grey',
        fontSize: 60,
    },
    textDefault: {
        color: '#969696',
        fontSize: 9,
        fontWeight: 'bold',
    },
    buttonSelected: {
        backgroundColor: '#e77474',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 85,
        width: 85,
        borderRadius: 42.5,
    },
    iconSelected: {
        color: '#ffffff',
        fontSize: 60,
    },
    textSelected: {
        color: '#e77474',
        fontSize: 9,
        fontWeight: 'bold',
    },
})