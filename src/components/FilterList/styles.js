import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles'
const { width, height, } = Dimensions.get('window')

export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        flexWrap: 'wrap',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: width-20,
        flexWrap: 'wrap',
    },
    iconContainer: {
        flex: 0.5,
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    //for the tap to select filter text at the top of the screen
    instructions: {
        color: colors.warmGreyTwo,
        padding: 12,
    },
    bathroomDefaultContainer: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bathroomSelectingContainer: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: colors.warmGreyTwo,
    },
})
