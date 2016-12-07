import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        height: height * 0.945,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 30,
        shadowColor: 'darkgrey',
        shadowOpacity: 1,
        shadowOffset: { width: 0.2, height: 1 },
        shadowRadius: 2,
        padding: 20,
        width: width * 0.945,
        borderRadius: 12,
        flexDirection: 'column'
    }
})
