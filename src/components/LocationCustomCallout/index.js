import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import { styles } from './styles'

class LocationCustomCallout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.bubble}>
          <View style={styles.amount}>
            {this.props.children}
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    )
  }
}

export default LocationCustomCallout