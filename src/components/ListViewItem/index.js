import React, { Component, PropTypes } from 'react'
import {
    View,
    ListView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { styles } from './style'

class ListViewItem extends Component {
    constructor() {
        super()
        this.state = {
            location: [],
        }
    }




    getLocationDetails() {
        const placeId = this.props.placeId;
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`, {
            method: 'GET',
        }).then(response => response.json())
            .then((results) => {
                this.setState({ location: results }) //&loading false
            })
    }
    componentDidMount() {
        this.getLocationDetails()
    }


    render() {
        console.log(this.state)
        console.log("results", this.state.location.results)
        // const lat = this.props.placeId.coordinate.latitude;
        // const long = this.props.placeId.coordinate.longitude;
        const lat = this.state.location[0].geometry.location.lat
        const lng = this.state.location[0].geometry.location.lng
        // const places = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`
        console.log("address", this.state.location[0].formatted_address)
        return (
            <TouchableOpacity onPress={() => { } } >
                <View style={styles.locationContainer}>
                    <Image
                        style={styles.map}
                        source={{ url: `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=18&size=120x120&maptype=roadmap&label:%20&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI` }}
                        />
                    <Text>{this.state.location[0].address_components[0].long_name}</Text>
                    <Text>
                        {this.state.location[0].address_components[1].long_name}
                        {this.state.location[0].address_components[2].long_name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

ListViewItem.propTypes = {
    placeId: PropTypes.string.isRequired,
}

export default ListViewItem


// <View style={styles.locationDetails}>
//     <Text>{this.props.locations.title}</Text>
//     <Text></Text>
//     <Text>100 Meters</Text>
// </View>