import { StyleSheet } from 'react-native'
import { colors, shadows, buttonSize } from '../../config/styles'

const styles = StyleSheet.create({
    TextInput: {
        flex: 4,
        height: buttonSize.searchBar,
        borderRadius: buttonSize.searchBar/2,
        paddingTop: 5,      //inside text input area
        paddingBottom: 5,   //inside text input area
        paddingLeft: 20,    //inside text input area
        paddingRight: 20,   //inside text input area
        backgroundColor: colors.white,
        fontSize: 18,
        shadowColor: colors.warmGrey,
        shadowOpacity: shadows.opacity,
        shadowOffset: { width: shadows.offset.width, height: shadows.offset.width },
        shadowRadius: shadows.radius,
    },
})

export default styles
