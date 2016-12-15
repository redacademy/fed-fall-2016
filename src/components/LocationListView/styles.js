import { StyleSheet } from 'react-native'
import { colors }from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    titleBox: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
         fontSize: 25,
         color: colors.lightGrey,
    }
})

export default styles
