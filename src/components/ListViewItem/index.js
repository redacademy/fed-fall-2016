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
        this.props.getLocationDetails(this.props.placeId)
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
                            source={{ url: getStaticMap() }}
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
const mapStateToProps = (state) => ({
    locationDetails: state.map.locationDetails,
    placeId: state.button.placeId,
})
const mapDispatchToProps = {
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewItem)
