import React, { Component, PropTypes } from 'react'
import {
    View,
    ListView,
    Text,
} from 'react-native'
import { styles } from './style'



class ListViewItem extends Component {

    render() {
        console.log("data", this.props.locations)
        return (
            <View style={styles.locationContainer}>
                <View style={styles.map}><Text>MAP</Text></View>
                <View style={styles.locationDetails}>
                    <Text>{this.props.locations.title}</Text>
                    <Text>{this.props.locations.place_id}</Text>
                    <Text>100 Meters</Text>
                </View>
            </View>
        )
    }
}

ListViewItem.propTypes = {
    locations: PropTypes.object.isRequired,
}

export default ListViewItem
