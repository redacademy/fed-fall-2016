import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../config/styles'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  buttonText: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 20,
  }
})

export default styles
