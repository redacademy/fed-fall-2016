import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import styles from './styles'
import Loader from '../Loader'
import RatingBar from '../RatingBar'
import MapPin from '../MapPin'
import { connect } from 'react-redux'
import { getStaticMap } from './getStaticMap'
import {
    setCardPosition,
} from '../../redux/actions'
const { width, height, } = Dimensions.get('window')

// import { colors } from '../../config/styles'

class ListViewItem extends Component {

    render() {
        if (this.props.isLoading) {
            return (
                <Loader />
            )
        } else {
            const lat = this.props.location.geometry.location.lat
            const lng = this.props.location.geometry.location.lng
            const address = this.props.location.formatted_address
            const addressArray = address.split(',')

            return (
                <TouchableOpacity onPress={() => this.props.setSelectedCard('LocationList')} >
                    <View style={styles.locationContainer}>
                        <Image
                            style={styles.map}
                            source={{ url: getStaticMap(lat, lng) }}
                            >
                            <MapPin scale="0.4" amenities={{ nursingRoom: true, changeTable: true }} />
                        </Image>
                        <View>
                            <Text style={styles.locationTitle}>{addressArray[0]}</Text>
                            <Text style={styles.locationDetails}>
                                {addressArray[1]}
                            </Text>
                            <View style={styles.ratingBar}>
                            <RatingBar
                                ratings={{
                                    quality: 'HIGH',
                                    clean: 'MEDIUM',
                                    nursing: 'LOW',
                                    quiet: 'MEDIUM',
                                }}
                                />
                                </View>
                            <Text style={styles.locationDetails}>32 Metres</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            )
        }
    }
}


const mapStateToProps = (state) => ({
    isLoading: state.map.isLoading,
})

export default connect(mapStateToProps)(ListViewItem)
