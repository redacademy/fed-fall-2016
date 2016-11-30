import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    searchContainer: {
      position: 'absolute',
      bottom: 0,
      width: Dimensions.get('window').width
    }
})
