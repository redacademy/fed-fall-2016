import React, { Component, } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import {
    LocationAdd,
    LocationFilter,
    LocationPreview,
    LocationRating,
} from '../../containers/'

import LocationListView from '../LocationListView'
import LocationSuggestions from '../LocationSuggestions'

class Card extends Component {

    constructor(props) {
        super(props)
        this._renderCard = this._renderCard.bind(this)
    }

    _renderCard() {
        const card = this.props.selectedCard

        if (this.props.cardVisible === true) {
            switch (card) {
                case 'LocationAdd':
                    return (
                        <LocationAdd
                            title={"Add a new Location"} addressLine1={""} addressLine2={""}
                            lat={this.props.addLocationCoords.lat} lng={this.props.addLocationCoords.lng}
                            />)
                case 'LocationSuggestions':
                  return <LocationSuggestions />
                case 'LocationFilter':
                    return <LocationFilter />
                case 'LocationList':
                    return <LocationListView  locationList={this.props.locationList}/>
                case 'LocationPreview':
                    return <LocationPreview placeid={this.props.placeid} locationDetails={this.props.locationDetails} />
                case 'LocationRating':
                    return <LocationRating placeid={this.props.placeid} />
                default:
                    return <Text>No Card for selected Action</Text>
            }
        }
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.cardPuller} />
                {this._renderCard()}
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedCard: state.card.selectedCard,
    cardVisible: state.card.cardVisible,
    placeid: state.card.placeid,
    locationDetails: state.card.placeid ? state.map.generatedLocationData.filter((location) => {
          return location.obj.placeId === state.card.placeid
      })[0].obj : {},
    locationList: state.map.locationList,
    addLocationCoords: state.map.addLocationCoords
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
