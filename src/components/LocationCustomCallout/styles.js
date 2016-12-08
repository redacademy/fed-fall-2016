import {
    StyleSheet,
} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#ffffff',
        // paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 12,
        borderColor: '#ffffff',
        borderWidth: 0.5,
        shadowColor: 'darkgrey',
        shadowOpacity: 1,
        shadowOffset: { width: 0.2, height: 1 },
        shadowRadius: 1,
    },
    amount: {
        flex: 1,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: '#ffffff',
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: '#ffffff',
        alignSelf: 'center',
        marginTop: -0.5,
        shadowColor: 'darkgrey',
        shadowOpacity: 1,
        shadowOffset: { width: 0.2, height: 1 },
        shadowRadius: 1,
    },
})