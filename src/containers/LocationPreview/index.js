import React, { Component } from 'react'
import { View, Text, Linking } from 'react-native'
import { connect } from 'react-redux'
import { 
    getLocationDetails,
 } from '../../redux/actions'
import { Button } from '../../components'
import styles from './style'

class LocationPreview extends Component {
    constructor(props){
        super(props)

        this.state = {
            latitude: null,
            longitude: null
        }

        this.showDirections = this.showDirections.bind(this)
    }
    componentWillMount(){
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

    showDirections(){
        const userLatitude = this.state.latitude
        const userLongitude = this.state.longitude
        const destinationLatitude = this.props.locationDetails.geometry.location.lat
        const destinationLongitude = this.props.locationDetails.geometry.location.lng
        Linking.openURL(`https://www.google.ca/maps/dir/${userLatitude},${userLongitude}/${destinationLatitude},${destinationLongitude}`)
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flex: 1, marginBottom: 10}}> 
                    <Text>{this.props.locationDetails.formatted_address}</Text>
                </View>
                <Button onPressFn={this.showDirections} style={{ justifyContent: 'flex-end' }}>
                    <Text style={styles.buttonText}> GO </Text>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    placeid: state.button.placeid,
    locationDetails: state.map.locationDetails
})

const mapDispatchToProps = {
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPreview)