import { StyleSheet, Dimensions } from 'react-native';
const { width, height, } = Dimensions.get('window')

export const styles = StyleSheet.create({
    mainContainer: {
      zIndex: -1,
      height: height * 2
    },
    mapContainer: {
      height: height,
    },
    outerContainer: {
      flex: 1, 
      height: height * 2, 
      marginTop: -height
    },
    bottomContainer: {
    flexDirection: 'row',
    zIndex: 1
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
  box: {
    height: height * 0.77,
    width: width * 0.96,
    borderRadius: 10,
    shadowColor: 'darkgrey',
    shadowOpacity: 1,
    shadowOffset: { width: 0.2, height: 1, },
    shadowRadius: 2,
  },
  text: {
    color: 'white'
  },
  button: {
    height: 45,
    width: width * 0.75,
    borderRadius: 22,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchBarInput: {
    borderWidth: 1, 
    borderColor: 'gray', 
    height: 30, 
    width: width * 0.5, 
    backgroundColor: 'white'
  }
})