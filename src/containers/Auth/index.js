import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
// import { connect } from 'react-redux'
import styles from './styles'
import StarBabyFace from '../../components/StarBabyFace'

class AuthScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Login',
      backgroundColor: 'lightgrey',
    },
  }
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
          <StarBabyFace scale={1} />
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

          <TouchableHighlight onPress={() => { } }>
            <View style={[styles.submit]}>
              <Text style={styles.submitText}>LOGIN</Text>
            </View>
          </TouchableHighlight>

        </View>
      </View >
    )
  }
}

export default AuthScreen
