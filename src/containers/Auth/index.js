import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { colors } from '../../config/styles'
import StarBabyFace from '../../components/StarBabyFace'
import { routeSet } from '../../redux/actions'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <StarBabyFace scale={1} fill={colors.darkGreyBlue} />
          <Text style={styles.headerText}>CHANGED</Text>
          <Text style={[styles.headerText]}><Text style={styles.headerPlus}>+</Text>FED</Text>
        </View>

        <View style={[styles.card, styles.shadow]}>

          <View style={styles.cardNub} />

          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder='LOGIN'
              onChangeText={email => this.setState({ email })}
              value={this.state.email} />
          </View>

          <View style={styles.divider} />

          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder='PASSWORD'
              onChangeText={password => this.setState({ password })}
              value={this.state.password} />
          </View>

          <TouchableOpacity onPress={() => this.props.routeSet('home')}>
            <View style={[styles.submit]}>
              <Text style={styles.submitText}>LOGIN</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View >
    )
  }
}

const mapDispatchToProps = {
  routeSet,
}

export default connect(null, mapDispatchToProps)(Auth)
