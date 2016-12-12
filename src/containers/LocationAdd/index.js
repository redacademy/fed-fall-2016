import React, { Component, PropTypes } from 'react'
import { Text, ScrollView, Dimensions } from 'react-native'
import { colors, textStyles } from '../../config/styles'

// Redux 
import { connect } from 'react-redux'
// import {
// } from '../../redux/actions'

// Components
import {
    AddressBlock,
    Button,
    FilterList,
    MapBlock,
    // RatingBlock,
} from '../../components'

class LocationAdd extends Component {

    //TODO: update locationHome to pass in place object instead of individual items like this
    //instead ?>format to be determined by db schema
    // <LocationAdd 
    //      location:
    //          {
    //              title: req, addressLine1: opt, addressLine2 opt,
    //              position: { lat: req, lng: req },
    //              width: req, height: req
    //          }
    // />
    static propTypes = {
        locationAdd: PropTypes.bool.isRequired,

        title: PropTypes.string.isRequired,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }

    render() {
        if (this.props.locationAdd === true) {
            return (
                <ScrollView>
                    <AddressBlock title={this.props.title} addressLine1={this.props.addressLine1} addressLine2={this.props.addressLine2} />
                    <FilterList showHeader={false} />
                    <MapBlock lat={this.props.lat} lng={this.props.lng} zoom={17} width={this.props.width - 80} height={this.props.height} pinScale={0.4} pinColor={colors.salmon} iconName={'starbaby-face'} />
                    <Button>
                        <Text style={textStyles.textStyle4}>SUBMIT</Text>
                    </Button>
                </ScrollView>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    locationAdd: state.card.locationAdd,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationAdd)