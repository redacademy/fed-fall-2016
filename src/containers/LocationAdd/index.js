import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { colors, textStyles } from '../../config/styles'
import styles from './styles'
const { width, height } = Dimensions.get('window')

// Redux 
import { connect } from 'react-redux'

import {
    getFilterListValues,
    addNewLocation
} from '../../redux/actions'

// Components
import {
    AddressBlock,
    Button,
    FilterList,
    MapBlock,
    // RatingBlock,
} from '../../components'
let h = height * 0.16,
    w = width * 0.82

class LocationAdd extends Component {
    //TODO: update locationHome to pass in place object instead of individual items like this
    //instead ?>format to be determined by db schema
    // <LocationAdd 
    //      location:
    //          {
    //              title: req, addressLine1: opt, addressLine2 opt,
    //              position: { lat: req, lng: req }
    //          },
    //          width: req,
    //          height: req,
    // />
    static propTypes = {
        placeid: PropTypes.string,
        title: PropTypes.string.isRequired,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }

    _handleOnPress() {
        this.props.getFilterListValues()
        
        const location = {
            placeId: this.props.placeid,
            loc: [this.props.lng, this.props.lat],
            rating: {
                userId: "scottbrandyfergtrace",
                quality: this.props.quality,
                clean: this.props.clean,
                nursing: this.props.nursing,
                quiet: this.props.quiet,
            },
            createdBy: "scottbrandyfergtrace",
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
    }

    render() {
        return (
            <ScrollView>
                <AddressBlock title={this.props.title} addressLine1={this.props.addressLine1} addressLine2={this.props.addressLine2} />
                <View style={styles.filterContainer}>
                    <FilterList showHeader={false} />
                </View>
                <MapBlock lat={this.props.lat} lng={this.props.lng} zoom={17} width={w} height={h} pinScale={0.4} pinColor={colors.salmon} iconName={'starbaby-face'} />
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this._handleOnPress()}>
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
    getFilterListValues,
    addNewLocation,
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