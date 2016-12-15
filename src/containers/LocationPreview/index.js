import React, { Component, PropTypes } from 'react'
import { View, Text, Linking, ScrollView } from 'react-native'
import {
    getLocationDetails,
    setSelectedCard,
} from '../../redux/actions'
import { connect } from 'react-redux'
import {
    AddressBlock,
    AmenitiesBar,
    Button,
    CardHeaderLocation,
    FilterList,
    Loader,
    MapBlock,
    //RatingBlock
    RatingBar,
} from '../../components'
import styles from './styles'
import { colors, textStyles, mapBlock } from '../../config/styles'
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
            (error) => console.log(error),
            { enableHighAccuracy: true })
    }

    _showDirections() {
        const result = this.props.locationList[0]
        const destinationLat = result.geometry.location.lat
        const destinationLong = result.geometry.location.lng

        const userLatitude = this.state.latitude
        const userLongitude = this.state.longitude

        Linking.openURL(`https://www.google.ca/maps/dir/${userLatitude},${userLongitude}/${destinationLat},${destinationLong}`)
    }

    render() {
        console.log('HERE COMES LocationPreview!!!!')
        console.log(this)
        if (this.props.isLoading) {
            return (
                <Loader />
            )
        } else {
            const result = this.props.locationList[0]
            const amenityList = this.props.locationDetails.amenities

            let amenities = [
                { iconName: 'baby-change-table', iconText: 'CHANGE TABLE', isSelected: amenityList.changeTable },
                { iconName: 'bottle', iconText: 'NURSING ROOM', isSelected: amenityList.nursingRoom },
                { iconName: 'male', iconText: 'MENS', isSelected: amenityList.mensBathroom },
                { iconName: 'female', iconText: 'WOMENS', isSelected: amenityList.womensBathroom },
                { iconName: 'family', iconText: 'FAMILY', isSelected: amenityList.familyBathroom },
                { iconName: 'mask', iconText: 'PRIVATE', isSelected: amenityList.privacy },
                { iconName: 'stroller-accessible', iconText: 'STROLLER\nACCESS', altIconName: 'stroller-inaccessible', altIconText: 'STROLLER\nINACCESS', isSelected: amenityList.strollerAccess },
                { iconName: 'key', iconText: 'REQUIRES KEY', isSelected: amenityList.requiresKey },
            ]

            const lat = result.geometry.location.lat
            const lng = result.geometry.location.lng
            const address = result.formatted_address
            const addressArray = address.split(',')

            let title = '', addressLine1 = '', addressLine2 = ''

            if (addressArray[0]) title = addressArray[0]
            if (addressArray[1]) addressLine1 = addressArray[1]
            if (addressArray[2]) addressLine2 = addressArray[2]
            if (addressArray[3]) addressLine2 = addressLine2 + addressArray[3]

            if (result) {
                console.log('amenities: ', this)
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CardHeaderLocation onPressFn={() => this.props.setSelectedCard('LocationRating', this.props.placeid)} amenities={this.props.locationDetails.amenities} width={400} />
                        <View style={{ height: 15 }} />
                        <AddressBlock title={title} addressLine1={addressLine1} addressLine2={addressLine2} />
                        <View style={{ height: 20 }} />
                        <RatingBar
                            title
                            size={300}
                            ratings={ratingSummaryCalculator(this.props.locationDetails.ratingSummary)}
                            />
                        <AmenitiesBar amenities={this.props.locationDetails.amenities} size={70} />
                        <MapBlock useMapDot={true} lat={this.props.locationDetails.loc[1]} lng={this.props.locationDetails.loc[0]} zoom={16} width={300} height={200} />
                        <View style={styles.buttonContainer}>
                            <Button onPressFn={this._showDirections}>
                                <Text style={textStyles.textStyle4}>GO</Text>
                            </Button>
                        </View>
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

const mapStateToProps = (state) => ({
    locationList: state.map.locationList,
    isLoading: state.map.isLoading,
    feedback: state.button.feedback,
})

const mapDispatchToProps = {
    getLocationDetails,
    setSelectedCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPreview)
