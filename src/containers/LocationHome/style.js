import { StyleSheet, Dimensions } from 'react-native'
const { width, height, } = Dimensions.get('window')

export const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        padding: 15,
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        zIndex: 1,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    mainContainer: {
      zIndex: -1,
      height: Dimensions.get('window').height * 2
    },
    mapContainer: {
      height: Dimensions.get('window').height,
    },
    bottomContainer: {
    flexDirection: 'row',
    zIndex: 1
  },
  optionsContainer: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  optionsBar: {
    height: 225,
    width: 80,
    position: 'absolute',
    top: 5,
    right: 3
  },
  bottomButtons: {
    alignItems: 'flex-end',
    height: 100,
    paddingRight: 21,
    bottom: 750,
    right: 0,
    position: 'absolute'
  },
    // locationAddVisible: {
    //     opacity: 1,
    // },
    // locationAddNotVisible: {
    //     opacity: 0,
    // },
})