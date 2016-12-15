import React, { Component, PropTypes } from 'react'
import { View, Text, Linking, ScrollView } from 'react-native'
import {
    getLocationDetails,
} from '../../redux/actions'
import { connect } from 'react-redux'
import {
    AddressBlock,
    Button,
    FilterList,
    Loader,
    MapBlock,
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
        const userLatitude = this.state.latitude
        const userLongitude = this.state.longitude
        const destinationLatitude = this.props.locationDetails.geometry.location.lat
        const destinationLongitude = this.props.locationDetails.geometry.location.lng
        Linking.openURL(`https://www.google.ca/maps/dir/${userLatitude},${userLongitude}/${destinationLatitude},${destinationLongitude}`)
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Loader />
            )
        } else {
            const result = this.props.locationList[0]
            // const amenity = this.props.locationList[0].obj.amenities

            // console.log('LocationPreview result', result)

            // let amenities = [
            //     { iconName: 'baby-change-table', iconText: 'CHANGE TABLE', isSelected: true },
            //     { iconName: 'bottle', iconText: 'NURSING ROOM', isSelected: false },
            //     { iconName: 'male', iconText: 'MENS', isSelected: true },
            //     { iconName: 'female', iconText: 'WOMENS', isSelected: false },
            //     { iconName: 'family', iconText: 'FAMILY', isSelected: false },
            //     { iconName: 'mask', iconText: 'PRIVATE', isSelected: true },
            //     { iconName: 'stroller-accessible', iconText: 'STROLLER\nACCESS', altIconName: 'stroller-inaccessible', altIconText: 'STROLLER\nINACCESS', isSelected: false },
            //     { iconName: 'key', iconText: 'REQUIRES KEY', isSelected: true },
            // ]
            // let amenities = [
            //     { iconName: 'baby-change-table', iconText: 'CHANGE TABLE', isSelected: amenity.changeTable },
            //     { iconName: 'bottle', iconText: 'NURSING ROOM', isSelected: amenity.nursingRoom },
            //     { iconName: 'male', iconText: 'MENS', isSelected: amenity.mensBathroom },
            //     { iconName: 'female', iconText: 'WOMENS', isSelected: amenity.womensBathroom },
            //     { iconName: 'family', iconText: 'FAMILY', isSelected: amenity.familyBathroom },
            //     { iconName: 'mask', iconText: 'PRIVATE', isSelected: amenity.privacy },
            //     { iconName: 'stroller-accessible', iconText: 'STROLLER\nACCESS', altIconName: 'stroller-inaccessible', altIconText: 'STROLLER\nINACCESS', isSelected: amenity.strollerAccess },
            //     { iconName: 'key', iconText: 'REQUIRES KEY', isSelected: amenity.requiresKey },
            // ]
            const lat = result.geometry.location.lat
            const lng = result.geometry.location.lng
            const address = result.formatted_address
            const addressArray = address.split(',')
            let title = '', addressLine1 = '', addressLine2 = ''

            if (addressArray[0]) title = addressArray[0]
            if (addressArray[1]) addressLine1 = addressArray[1]
            if (addressArray[2]) addressLine2 = addressArray[2]
            if (addressArray[3]) addressLine2 = addressLine2 + addressArray[3]
            // filterList={amenity}
            if (result) {
                // console.log('amenities: ', amenities)
                return (
                    <ScrollView>
                        <AddressBlock title={title} addressLine1={addressLine1} addressLine2={addressLine2} />
                        <View style={styles.filterContainer}>
                            <FilterList filterList={this.props.amenities} providingFilters={true} showHeader={false} readOnly={true} />
                        </View>
                        <MapBlock useMapDot={true} lat={this.props.lat} lng={this.props.lng} zoom={17} width={mapBlock.smallRectangle.w} height={mapBlock.smallRectangle.h} />
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
})

const mapDispatchToProps = {
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPreview)
