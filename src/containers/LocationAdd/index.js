import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { colors, textStyles } from '../../config/styles'
import styles from './styles'
const { width, height } = Dimensions.get('window')

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
        title: PropTypes.string.isRequired,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }

    render() {
        return (
            <ScrollView>
                <AddressBlock title={this.props.title} addressLine1={this.props.addressLine1} addressLine2={this.props.addressLine2} />
                <View style={styles.filterContainer}>
                    <FilterList showHeader={false} />
                </View>
                    <MapBlock lat={this.props.lat} lng={this.props.lng} zoom={17} width={(width * 0.82)} height={(height * 0.16)} pinScale={0.4} pinColor={colors.salmon} iconName={'starbaby-face'} />
                <View style={styles.buttonContainer}>
                    <Button>
                        <Text style={textStyles.textStyle4}>SUBMIT</Text>
                    </Button>
                </View>

            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationAdd)