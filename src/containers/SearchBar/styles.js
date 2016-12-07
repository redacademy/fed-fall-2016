import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    TextInput: {
        height: 52,
        width: Dimensions.get('window').width / 1.45,
        borderRadius: 22,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: 'lightgrey',
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: -2 },
        shadowRadius: 3,
    },
})

export default styles
