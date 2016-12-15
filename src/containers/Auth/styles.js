import { StyleSheet, Dimensions } from 'react-native'
import { colors, textStyles, fonts } from '../../config/styles'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGreyBlue,
    marginTop: -275,
  },
  top: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fonts.itimRegular,
    lineHeight: 0,
    letterSpacing: 2.5,
    color: colors.white,
    fontSize: 54,
    marginBottom: -10,
  },
  headerPlus: {
    color: colors.darkPeach,
  },
  card: {
    marginTop: -300,
    backgroundColor: colors.white,
    flex: 5,
    flexDirection: 'column',
    marginRight: 8,
    marginLeft: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 30,
    paddingTop: 80,
  },
  cardNub: {
    position: 'absolute',
    top: 10,
    backgroundColor: colors.lightGrey,
    width: 45,
    height: 8,
    borderRadius: 5,
    left: width / 2 - 30,
    marginBottom: 0,
  },
  shadow: {
    shadowColor: colors.greyish,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  input: {
    marginTop: 0,
  },
  inputText: {
    fontFamily: fonts.rubikLight,
    height: 35,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    fontSize: 24,
    textAlign: 'center',
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: -30,
    marginRight: -30,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: colors.lightGrey,
  },
  submit: {
    backgroundColor: colors.salmon,
    marginTop: 30,
    borderRadius: 25,
    height: 50,
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 24,
    fontFamily: fonts.rubikRegular,
  },
})

export default styles
