import React, { Component, PropTypes } from 'react'
import { Text, ScrollView, Dimensions } from 'react-native'
import { colors, textStyles } from '../../config/styles'
const { width, height } = Dimensions.get('window')

// Redux 
import { connect } from 'react-redux'
import {
    enterLocationAdd,
} from '../../redux/actions'

// // Containers
// import { Preview } from '../index'

// Components
import {
    AddressBlock,
    Button,
    FilterList,
    MapBlock,
    // RatingBlock,
} from '../../components'

class LocationAdd extends Component {
    static propTypes = {
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
                    <Button style={{ alignSelf: 'flex-end' }}>
                        <Text style={textStyles.textStyle4}>SUBMIT</Text>
                    </Button>
                </ScrollView>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    locationAdd: state.button.locationAdd,
})

const mapDispatchToProps = {
    enterLocationAdd,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationAdd)