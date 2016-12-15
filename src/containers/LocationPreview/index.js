import React, { Component, PropTypes } from 'react'
import { View, Text, Linking, ScrollView } from 'react-native'
import {
    getLocationDetails,
    setSelectedCard,
} from '../../redux/actions'
import { connect } from 'react-redux'
import {
    AddressBlock,
    Button,
    FilterList,
    Loader,
    MapBlock,
    CardHeaderLocation,
    //RatingBlock
} from '../../components'
import styles from './style'
import { colors, textStyles, mapBlock } from '../../config/styles'

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
        const destinationLong =result.geometry.location.lng

        const userLatitude = this.state.latitude
        const userLongitude = this.state.longitude
      
        Linking.openURL(`https://www.google.ca/maps/dir/${userLatitude},${userLongitude}/${destinationLat},${destinationLong}`)
    }

    render() {
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
                // console.log('amenities: ', amenities)
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <CardHeaderLocation onPressFn={() => this.props.setSelectedCard('LocationRating', this.props.placeid)} amenities={{changeTable: true, nursingRoom: true}} width={400} />
                        <AddressBlock title={title} addressLine1={addressLine1} addressLine2={addressLine2} />
                        <View style={[styles.filterContainer, {flex: 1}]}>
                            <FilterList filterList={amenities} providingFilters={true} showHeader={false} readOnly={true} />
                        </View>
                        <MapBlock useMapDot={true} lat={lat} lng={lng} zoom={17} width={mapBlock.smallRectangle.w} height={mapBlock.smallRectangle.h} />
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
    placeid: state.card.placeid,
    feedback: state.button.feedback,
    locationDetails: state.map.locationDetails,
})

const mapDispatchToProps = {
    getLocationDetails,
    setSelectedCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPreview)
