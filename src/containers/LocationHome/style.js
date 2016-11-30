import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: -1,
  },
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
    height: Dimensions.get('window').height
  },
  bottomButtons: {
    alignItems: 'flex-end',
    height: 150,
    zIndex: 1,
    marginRight: 5,
    marginBottom: 100
  }
})
