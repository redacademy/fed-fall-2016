import React, { Component, PropTypes } from 'react'
import {
    View,
    ListView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { styles } from './style'
import Loader from '../Loader'
import RatingBar from '../RatingBar'
import MapPin from '../MapPin'

class ListViewItem extends Component {
    constructor() {
        super()
        this.state = {
            location: [],
            isLoading: true,
        }
    }

    getLocationDetails() {
        const placeId = this.props.placeId;
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`, {
            method: 'GET',
        }).then(response => response.json())
            .then((results) => {
                this.setState({ location: results, isLoading: false }) //&loading false
            })
    }
    componentWillMount() {
        this.getLocationDetails()
    }


    render() {
        console.log(this.state.dataSource)
        if (this.state.isLoading) {
            return (
                <Loader />
            )
        } else {
            console.log('render: placeId', this.props.placeId)
            console.log("render: results", this.state.location.results[0])
            // const lat = this.props.placeId.coordinate.latitude;
            // const long = this.props.placeId.coordinate.longitude;
            const lat = this.state.location.results[0].geometry.location.lat
            const lng = this.state.location.results[0].geometry.location.lng
            const address = this.state.location.results[0].formatted_address
            const addressArray = address.split(',')
            console.log(addressArray)
            console.log("format", this.state.location.results[0].formatted_address)
            // const places = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`
            console.log("address", this.state.location.results[0].formatted_address)
            return (
                <TouchableOpacity onPress={() => { } } >
                    <View style={styles.locationContainer}>
                        <Image
                            style={styles.map}
                            source={{ url: `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=18&size=120x120&maptype=roadmap&label:%20&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI` }}
                            >
                            <MapPin scale="0.4"  pinColor={'salmon'} iconName="diaper" />
                            </Image>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.locationTitle}>{addressArray[0]}</Text>
                            <Text style={styles.locationDetails}>
                                {addressArray[1]}
                            </Text>
                            <RatingBar titleless ratings={{ quality: 'HIGH', clean: 'MEDIUM', nursing: 'LOW', quiet: 'MEDIUM' }} />
                            <Text>32 Metres</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            )
        }
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