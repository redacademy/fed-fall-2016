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
let h = height * 0.16,
    w = width * 0.82

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
    componentWillMount() {
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
            const lat = result.geometry.location.lat
            const lng = result.geometry.location.lng
            const address = result.formatted_address
            const addressArray = address.split(',')
            let title='', addressLine1='', addressLine2=''

            if(addressArray[0]) title = addressArray[0]
            if(addressArray[1]) addressLine1 = addressArray[1]
            if(addressArray[2]) addressLine2 = addressArray[2]
            if(addressArray[3]) addressLine2 = addressLine2+addressArray[3]

            if(result){
            return (
                <ScrollView>
                    <AddressBlock title={title} addressLine1={addressLine1} addressLine2={addressLine2} />
                    <View style={styles.filterContainer}>
                        <FilterList showHeader={false} />
                    </View>

                    <MapBlock lat={lat} lng={lng} zoom={18} width={w} height={h} pinScale={0.4} pinColor={colors.salmon} iconName={'starbaby-face'} />
                    <View style={styles.buttonContainer}>
                        <Button onPressFn={this._showDirections}>
                            <Text style={textStyles.textStyle4}>GO</Text>
                        </Button>
                    </View>

                </ScrollView>
            )} else {
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