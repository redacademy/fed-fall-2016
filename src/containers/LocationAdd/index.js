import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { colors, textStyles, mapBlock } from '../../config/styles'
import styles from './styles'

// Redux
import { connect } from 'react-redux'

import {
  locationDetailsForAdd,
  loadLocationSuggestions,
  addNewLocation
} from '../../redux/actions'

// Components
import {
  AddressBlock,
  Button,
  FilterList,
} from '../../components'

class LocationAdd extends Component {

  static propTypes = {
    placeid: PropTypes.string,
    title: PropTypes.string.isRequired,
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }

  _addLocation() {

    locationDetailsForAdd(this.props.lat, this.props.lng)
      .then((response) => {

        const location = {
          placeId: response.results[0].place_id,
          loc: [this.props.lng, this.props.lat],
          ratingSummary: {
            quality: this.props.quality,
            clean: this.props.clean,
            nursing: this.props.nursing,
            quiet: this.props.quiet,
            totalRaters: 1,
          },
          rating: {
            userId: "DemoUser",
            quality: this.props.quality,
            clean: this.props.clean,
            nursing: this.props.nursing,
            quiet: this.props.quiet,
          },
          createdBy: "DemoUser",
          amenities: {
            changeTable: this.props.changeTable,
            nursingRoom: this.props.nursingRoom,
            mensBathroom: this.props.mensBathroom,
            womensBathroom: this.props.womensBathroom,
            familyBathroom: this.props.familyBathroom,
            privacy: this.props.privacy,
            strollerAccess: this.props.strollerAccess,
            requiresKey: this.props.requiresKey,
          },
        }
        this.props.addNewLocation(location)
      });

  }

  render() {
    return (
      <ScrollView >
        <AddressBlock title={this.props.title} addressLine1={this.props.addressLine1} addressLine2={this.props.addressLine2} />
        <View style={styles.filterContainer}>
          <FilterList providingFilters={false} showHeader={false} readOnly={false} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._addLocation.bind(this)}>
            <Text style={textStyles.textStyle4}>SUBMIT</Text>
          </Button>
        </View>

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  changeTable: state.filter.changeTable,
  nursingRoom: state.filter.nursingRoom,
  mensBathroom: state.filter.mensBathroom,
  womensBathroom: state.filter.womensBathroom,
  familyBathroom: state.filter.familyBathroom,
  privacy: state.filter.privacy,
  strollerAccess: state.filter.strollerAccess,
  requiresKey: state.filter.requiresKey,
  quality: state.rating.quality,
  clean: state.rating.clean,
  nursing: state.rating.nursing,
  quiet: state.rating.quiet,
  userId: state.rating.userId,
})

const mapDispatchToProps = {
  addNewLocation,
  loadLocationSuggestions
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationAdd)

    /*
    {
        Format for save...
        "placeId": "trice",
        "loc": [
            -120,
            49.5
        ],
        "rating": {
            "userId": "scottbrandyfergtrace",
            "quality": 1,
            "clean": 2,
            "nursing": 3,
            "quiet": 2
        },
        "createdBy": "scottbrandyfergtrace",
        "amenities": {
            "changeTable": true,
            "nursingRoom": true,
            "mensBathroom": false,
            "womensBathroom": false,
            "familyBathroom": true,
            "private": false,
            "strollerAccess": true,
            "requiresKey": false
        }
    }
    */
