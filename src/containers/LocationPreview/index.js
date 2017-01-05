import React, { Component, PropTypes } from 'react'
import { View, Text, Linking, ScrollView, TouchableOpacity } from 'react-native'
import {
    getLocationDetails,
    setSelectedCard,
} from '../../redux/actions'
import { connect } from 'react-redux'
import {
    AddressBlock,
    // AmenitiesBar,
    Button,
    CardHeaderLocation,
    FilterList,
    Loader,
    MapBlock,
    RatingBar,
} from '../../components'
import styles from './styles'
import { colors, textStyles, mapBlock, cardWidth, cardHeight, } from '../../config/styles'
import { ratingSummaryCalculator } from '../../config/functions'

class LocationPreview extends Component {
    static propTypes = {
        placeid: PropTypes.string.isRequired,
    }
    constructor(props) {
        super(props)

        this.state = {
            latitude: null,
            longitude: null,
            location: [],
            isLoading: true,
        }

        this._showDirections = this._showDirections.bind(this)
    }
    componentDidMount() {
        this.props.getLocationDetails(this.props.placeid)

        navigator.geolocation.getCurrentPosition((userLocation) => {
            this.setState({
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
            })
        },
            (error) => null,
            { enableHighAccuracy: true })
    }
    _showDirections() {
        const result = this.props.locationList[this.props.locationList.length-1]
        const destinationLat = result.geometry.location.lat
        const destinationLong = result.geometry.location.lng

        const userLatitude = this.state.latitude
        const userLongitude = this.state.longitude

        Linking.openURL(`https://www.google.ca/maps/dir/${userLatitude},${userLongitude}/${destinationLat},${destinationLong}/data=!4m2!4m1!3e2`) //data=!4m2!4m1!3e2 === default to walking
    }
    render() {
        if (this.props.isLoading) {
            return (
                <Loader />
            )
        } else {

            if (this.props.locationList.length > 0) {
                const result = this.props.locationList[this.props.locationList.length-1]
                const amenityList = this.props.locationDetails.amenities

                let amenities = []
                if (amenityList.changeTable) amenities.push({ iconName: 'baby-change-table', iconText: 'CHANGE\nTABLE', isSelected: amenityList.changeTable })
                if (amenityList.nursingRoom) amenities.push({ iconName: 'breast-feeding', iconText: 'NURSING\nROOM', isSelected: amenityList.nursingRoom })
                if (amenityList.washroomMen) amenities.push({ iconName: 'male', iconText: 'MEN\'S\nWASHROOM', isSelected: amenityList.washroomMen })
                if (amenityList.washroomWomen) amenities.push({ iconName: 'female', iconText: 'WOMEN\'S\nWASHROOM', isSelected: amenityList.washroomWomen })
                if (amenityList.washroomFamily) amenities.push({ iconName: 'family', iconText: 'FAMILY\nWASHROOM', isSelected: amenityList.washroomFamily })
                if (amenityList.private) amenities.push({ iconName: 'mask', iconText: 'PRIVATE', isSelected: amenityList.private })
                if (amenityList.strollerAccessible) amenities.push({ iconName: 'stroller-accessible', iconText: 'STROLLER\nACCESS', altIconName: 'stroller-inaccessible', altIconText: 'STROLLER\nINACCESS', isSelected: amenityList.strollerAccessible })
                if (amenityList.keyRequired) amenities.push({ iconName: 'key', iconText: 'REQUIRES\nKEY', isSelected: amenityList.keyRequired })

                const lat = result.geometry.location.lat
                const lng = result.geometry.location.lng
                const address = result.formatted_address
                const addressArray = address.split(',')

                let title = '', addressLine1 = '', addressLine2 = ''

                if (addressArray[0]) title = addressArray[0]
                if (addressArray[1]) addressLine1 = addressArray[1]
                if (addressArray[2]) addressLine2 = addressArray[2]
                if (addressArray[3]) addressLine2 = addressLine2 + addressArray[3]

                return (
                    <ScrollView>
                        <TouchableOpacity activeOpacity={100}>
                            <View style={styles.spacer}></View>
                            <View style={styles.spacer}>
                                <CardHeaderLocation onPressFn={() => this.props.setSelectedCard('LocationRating', this.props.placeid)} amenities={this.props.locationDetails.amenities} width={cardWidth * 1.52} />
                            </View>
                            <View style={styles.spacer}>
                                <AddressBlock title={title} addressLine1={addressLine1} addressLine2={addressLine2} />
                            </View>
                            <View style={styles.spacer}>
                                <RatingBar
                                    title
                                    size={cardWidth}
                                    ratings={ratingSummaryCalculator(this.props.locationDetails.ratingSummary)}
                                    />
                            </View>
                            <View style={styles.amenitiesContainer}>
                                <FilterList filterList={amenities} providingFilters={true} readOnly={true} showFilterOnlyIfTrue={true} />
                            </View>
                            <View style={styles.spacer}></View>
                            <View style={styles.spacer}>
                                <MapBlock useMapDot={true} lat={this.props.locationDetails.loc[1]} lng={this.props.locationDetails.loc[0]} zoom={16} width={cardWidth} height={cardHeight * 0.2} />
                            </View>
                            <Button onPressFn={this._showDirections}>
                                <Text style={textStyles.textStyle4}>GO</Text>
                            </Button>
                        </TouchableOpacity>
                    </ScrollView>
                )
            } else {
                return (
                    <Text>Location Details Missing for placeid: {this.props.placeid}</Text>
                )
            }
        }
    }
}
/*
// original
                        <View style={styles.spacer}>
                            <AmenitiesBar amenities={this.props.locationDetails.amenities} size={70} />
                        </View>
*/
const mapStateToProps = (state) => ({
    locationList: state.map.locationList,
    isLoading: state.map.isLoading,
})

const mapDispatchToProps = {
    getLocationDetails,
    setSelectedCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPreview)
