import { StyleSheet, Dimensions } from 'react-native';
import { CIRCLE_SIZE } from './index'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    searchContainer: {
      position: 'absolute',
      bottom: 0,
      width: Dimensions.get('window').width
    },
    circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },

})
