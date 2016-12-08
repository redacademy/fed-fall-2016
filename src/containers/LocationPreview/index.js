import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { getLocationDetails } from '../../redux/actions'


class LocationPreview extends Component {
    componentWillMount(){
        this.props.getLocationDetails(this.props.placeId)
    }

    render(){
        return (
            <Text>{this.props.locationDetails.formatted_address}</Text>
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