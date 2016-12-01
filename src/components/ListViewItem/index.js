import React, { Component, PropTypes } from 'react'
import {
    View,
    ListView,
    Text,
} from 'react-native'
// import { styles } from './styles'



class ListViewItem extends Component {

    render() {
        console.log("data", this.props.locations)
        return (
            <View>
                <View><Text>{this.props.locations.title}</Text></View>
            </View>
        )
    }
}

ListViewItem.propTypes = {
    locations: PropTypes.object.isRequired,
}

export default ListViewItem
