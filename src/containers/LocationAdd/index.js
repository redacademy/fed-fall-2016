import React, { Component } from 'react'
import { Text, ScrollView, Dimensions } from 'react-native'
import { colors, textStyles } from '../../config/styles'
const { width, height } = Dimensions.get('window')

// Redux 
import { connect } from 'react-redux'
import {
    enterLocationAdd,
} from '../../redux/actions'

// Containers
import { Preview } from '../index'

// Components
import {
    AddressBlock,
    Button,
    FilterList,
    MapBlock,
    // RatingBlock,
} from '../../components'

class LocationAdd extends Component {
    componentWillMount() {
    }

    render() {
        if (this.props.locationAdd === true) {
        return (
            <Preview>
                <ScrollView>
                    <AddressBlock title={"RED Academy"} addressLine1={"1490 W Broadway #200"} addressLine2={"Vancouver, BC V6H 4E8"} />
                    <FilterList showHeader={false} />
                    <MapBlock lat={49.2634046} lng={-123.1404133} zoom={17} width={width - 80} height={120} pinScale={0.4} pinColor={colors.salmon} iconName={'starbaby-face'} />
                    <Button style={{ alignSelf: 'flex-end' }}>
                        <Text style={textStyles.textStyle4}>SUBMIT</Text>
                    </Button>
                </ScrollView>
            </Preview>
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