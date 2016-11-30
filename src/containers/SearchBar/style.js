import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    TextInput: {
        height: 52,
        width: Dimensions.get('window').width / 1.45,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 22,
        paddingTop: 5, 
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15
    }
})