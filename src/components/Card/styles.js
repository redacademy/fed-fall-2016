import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: 'white',
        height: 600,
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

export default styles
