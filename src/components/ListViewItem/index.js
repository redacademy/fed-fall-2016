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
import { connect } from 'react-redux'
import { getLocationDetails } from '../../redux/actions'
import { getStaticMap } from './getStaticMap'
import { colors } from '../../config/styles'

class ListViewItem extends Component {
    static propTypes = {
        placeId: PropTypes.string.isRequired,
    }

    componentWillMount() {
        this.props.getLocationDetails(this.props.placeId)
    }
    render() {
        
        if (this.props.isLoading) {
            return (
                <Loader />
            )
        } else {
            const loc = this.props.locationDetails.results[0]
            const lat = loc.geometry.location.lat
            const lng = loc.geometry.location.lng
            const address = loc.formatted_address
            const addressArray = address.split(',')
            console.log("placeid", this.props.placeId)
            return (
                <TouchableOpacity onPress={() => { } } >
                    <View style={styles.locationContainer}>
                        <Image
                            style={styles.map}
                            source={{ url: getStaticMap(lat, lng) }}
                            >
                            <MapPin scale="0.4" amenities={{ nursingRoom: true, changeTable: true }} />
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
const mapStateToProps = (state) => ({
    locationDetails: state.map.locationDetails,
    placeId: state.button.placeId,
    isLoading: state.map.isLoading,
})
const mapDispatchToProps = {
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewItem)
