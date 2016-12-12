import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getLocationDetails } from '../../redux/actions'
import { Button } from '../../components'
import styles from './style'
import LocationListView from '../../components/LocationListView'

class LocationPreview extends Component {
    componentWillMount(){
        this.props.getLocationDetails(this.props.placeId)
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flex: 1, marginBottom: 10}}> 
                    <Text>{this.props.locationDetails.formatted_address}</Text>
                </View>
                <LocationListView />
                <Button style={{ justifyContent: 'flex-end' }}>
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
    getLocationDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPreview)