import React, { Component, PropTypes } from 'react'
import { View, Text, Linking, ScrollView, Dimensions } from 'react-native'
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
import { colors, textStyles } from '../../config/styles'
const { width, height } = Dimensions.get('window')

class LocationPreview extends Component {
    static propTypes = {
        placeId: PropTypes.string.isRequired,
    }
    constructor(props) {
        super(props)

        this.state = {
            latitude: null,
            longitude: null,
            location: [],
            isLoading: true,
        }

        this.showDirections = this.showDirections.bind(this)
    }
    componentWillMount() {
        this.props.getLocationDetails(this.props.placeId)

        navigator.geolocation.getCurrentPosition((userLocation) => {
            this.setState({
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
            })
        },
            (error) => console.log(error),
            { enableHighAccuracy: true })
    }

    showDirections() {
        const userLatitude = this.state.latitude
        const userLongitude = this.state.longitude
        const destinationLatitude = this.props.locationDetails.geometry.location.lat
        const destinationLongitude = this.props.locationDetails.geometry.location.lng
        Linking.openURL(`https://www.google.ca/maps/dir/${userLatitude},${userLongitude}/${destinationLatitude},${destinationLongitude}`)
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
                <ScrollView>
                    <AddressBlock title={addressArray[0]} addressLine1={addressArray[1]} addressLine2={addressArray[2]} />
                    <View style={styles.filterContainer}>
                        <FilterList showHeader={false} />
                    </View>
                    <MapBlock lat={lat} lng={lng} zoom={18} width={width * 0.82} height={height * 0.16} pinScale={0.4} pinColor={colors.salmon} iconName={'starbaby-face'} />
                    <View style={styles.buttonContainer}>
                        <Button onPressFn={this.showDirections} style={{ justifyContent: 'flex-end' }}>
                            <Text style={textStyles.textStyle4}>GO</Text>
                        </Button>
                    </View>

                </ScrollView>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    placeid: state.button.placeid,
    locationDetails: state.map.locationDetails,
})

const mapDispatchToProps = {
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPreview)