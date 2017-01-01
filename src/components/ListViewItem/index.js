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
    setSelectedCard,
} from '../../redux/actions'
import { ratingSummaryCalculator } from '../../config/functions'
// import { colors } from '../../config/styles'



class ListViewItem extends Component {

    constructor() {
        super()
        this.state = {
            size: 0,
        }
    }

    render() {

        const size = this.props.size ? this.props.size : this.state.size
        if (this.props.isLoading) {
            return (
                <Loader />
            )
        } else {
            const lat = this.props.location.geometry.location.lat
            const lng = this.props.location.geometry.location.lng
            const address = this.props.location.formatted_address
            const addressArray = address.split(',')
            // console.log('location: ', addressArray[0])
            if (this.props.mongoData.length > 0) {
                const distance = (this.props.mongoData[0].dis).toFixed(0)
                return (
                    <TouchableOpacity onPress={() => this.props.setSelectedCard('LocationPreview', this.props.placeid, undefined, true)} >
                        <View style={styles.locationContainer}>
                            <Image
                                style={styles.map}
                                source={{ url: getStaticMap(lat, lng) }}
                                >
                                <MapPin scale="0.25" amenities={this.props.mongoData[0].obj.amenities} />
                            </Image>
                            <View>
                                <Text style={styles.locationTitle}>{addressArray[0]}</Text>
                                <Text style={styles.locationDetails}>
                                    {addressArray[1]}
                                </Text>
                                <View style={styles.ratingBar}>
                                    <RatingBar
                                        ratings={ratingSummaryCalculator(this.props.mongoData[0].obj.ratingSummary)}
                                        />
                                </View>
                                <Text style={styles.locationDetails}>{distance}m</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                )
            } else {
                // console.log('ListViewItem: props', this.props)
                return (
                    <TouchableOpacity onPress={() => this.props.setSelectedCard('LocationPreview', this.props.placeid, undefined, true)} >
                        <View style={styles.locationContainer}>
                            <Image
                                style={styles.map}
                                source={{ url: getStaticMap(lat, lng) }}
                                >
                            </Image>
                            <View>
                                <Text style={styles.locationTitle}>{addressArray[0]}</Text>
                                <Text style={styles.locationDetails}>
                                    {addressArray[1]}
                                </Text>
                                <Text style={styles.locationDetails}>information unavailable</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                )
            }
        }
    }
}
const mapStateToProps = (state) => ({
    selectedCard: state.card.selectedCard,
    isLoading: state.map.isLoading,
})


const mapDispatchToProps = {
    setCardPosition,
    setSelectedCard,
}


export default connect(mapStateToProps, mapDispatchToProps)(ListViewItem)
