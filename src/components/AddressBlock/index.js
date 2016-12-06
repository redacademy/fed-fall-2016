import React, { Component, PropTypes } from 'react'
import {
    View, Text
} from 'react-native'
import { styles } from './style'

class AddressBlock extends Component {
    static proptTypes = {
        title: PropTypes.string.isRequired,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                {
                    this.props.addressLine1 ?
                        <Text style={styles.address}>{this.props.addressLine1}</Text>
                        :
                        null
                }
                {
                    this.props.addressLine2 ?
                        <Text style={styles.address}>{this.props.addressLine2}</Text>
                        :
                        null
                }
            </View>
        )
    }
}

export default AddressBlock


//USAGE:
// import { AddressBlock } from '../components/AddressBlock'
//<AddressBlock title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"}/>