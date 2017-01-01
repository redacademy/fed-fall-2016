import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { colors, padding, buttonSize } from '../../config/styles'

const styles = StyleSheet.create({
    mainContainer: {
        zIndex: -1,
        height: height * 2,
    },
    mapContainer: {
        height: height,
    },
    searchContainer: {
        position: 'absolute', 
        bottom: height+padding.deviceBottom,
        zIndex: 1,
        flex: 1,
        flexDirection: 'row',
        paddingLeft: padding.deviceLeft,
        paddingRight: padding.deviceRight,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.61,
        backgroundColor: colors.warmGrey,
        width: width,
        height: height,

    },
    optionsBarContainer: {
        // marginTop: padding.deviceTop,
        height: buttonSize.optionBar*3+padding.bottom*3,
        width: buttonSize.optionBar,
        minWidth: buttonSize.optionBar,
        minHeight: buttonSize.optionBar*3,
        position: 'absolute',
        top: padding.deviceTop,
        right: padding.deviceRight,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    bottomButtons: {
        alignItems: 'flex-end',
        height: buttonSize.listFilter*2 + padding.bottom,
        paddingRight: padding.deviceRight-(buttonSize.searchBar-buttonSize.listFilter)/2,
        bottom: 1.12*height,
        right: 0,
        position: 'absolute',
    },
    locationAddContainer: {
        flex: 1, 
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles
