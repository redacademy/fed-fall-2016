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

import { LocationListView, LocationSuggestions } from '../../components'

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
                            title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"}
                            lat={49.2634046} lng={-123.1404133}
                            />)
                case 'LocationSuggestions':
                  return <View><Text>WTF</Text></View>
                case 'LocationFilter':
                    return <LocationFilter />
                case 'LocationList':
                    return <LocationListView />
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
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
