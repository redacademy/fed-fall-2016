import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import { styles } from './styles'

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}

class CustomCallout extends React.Component {
  render() {
            console.log('render CustomCallout', this.props)
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
    );
  }
}

CustomCallout.propTypes = propTypes


export default CustomCallout