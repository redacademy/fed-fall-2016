import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import Loader from '../Loader'
import RatingBar from '../RatingBar'
import MapPin from '../MapPin'

class ListViewItem extends Component {
    static propTypes = {
        placeId: PropTypes.string.isRequired,
    }
    constructor() {
        super()
        this.state = {
            location: [],
            isLoading: true,
        }
    }
    componentWillMount() {
        this._getLocationDetails()
    }
    _getLocationDetails() {
        const placeId = this.props.placeId;
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`, {
            method: 'GET',
        }).then(response => response.json())
            .then((results) => {
                this.setState({ location: results, isLoading: false })
            })
    }
    render() {
        if (this.state.isLoading) {
            return (
                <Loader />
            )
        } else {
            const lat = this.state.location.results[0].geometry.location.lat
            const lng = this.state.location.results[0].geometry.location.lng
            const address = this.state.location.results[0].formatted_address
            const addressArray = address.split(',')
            return (
                <TouchableOpacity onPress={() => { } } >
                    <View style={styles.locationContainer}>
                        <Image
                            style={styles.map}
                            source={{ url: `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=18&size=120x120&maptype=roadmap&label:%20&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI` }}
                            >
                            <MapPin scale="0.4" pinColor={'salmon'} iconName="diaper" />
                        </Image>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.locationTitle}>{addressArray[0]}</Text>
                            <Text style={styles.locationDetails}>
                                {addressArray[1]}
                            </Text>
                            <RatingBar titleless ratings={{ quality: 'HIGH', clean: 'MEDIUM', nursing: 'LOW', quiet: 'MEDIUM' }} />
                            <Text style={styles.locationDetails}>32 Metres</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            )
        }
    }
}

export default ListViewItem
