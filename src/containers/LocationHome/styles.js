import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { colorPalette } from '../../config/styles'

const styles = StyleSheet.create({
    mainContainer: {
        zIndex: -1,
        height: height * 2,
    },
    mapContainer: {
        height: height,
    },
    bottomContainer: {
        flexDirection: 'row',
        zIndex: 1,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'white',
        width: width,
        height: height,

    },
    optionsContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    optionsBar: {
        height: 225,
        width: 80,
        position: 'absolute',
        top: 5,
        right: 3,
    },
    bottomButtons: {
        alignItems: 'flex-end',
        height: 100,
        paddingRight: 21,
        bottom: 750,
        right: 0,
        position: 'absolute',
    },
    locationAddContainer: {
        flex: 1, 
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {                       // new location button on custom callout
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 48,
        width: 48,
        borderRadius: 24,
        borderColor: colorPalette.blush.hex,
        borderWidth: 2,
    },
    icon: {                       // icon for new location button on custom callout
        color: colorPalette.blush.hex,
        fontSize: 20,
    },
})

export default styles
