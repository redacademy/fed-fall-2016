import React, { Component, PropTypes } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { colors, textStyles } from '../../config/styles'

// Redux 
import { connect } from 'react-redux'

// import {
// } from '../../redux/actions'

// Components
import {
    AddressBlock,
    Button,
    // RatingBlock,
} from '../../components'

class LocationFilter extends Component {

    static propTypes = {
        locationFilter: PropTypes.bool.isRequired,
    }

    render() {
        if (this.props.locationFilter === true) {
            return (
                <View>
                    <Text> Testing...</Text>
                </View>
            )
        }
    }
}
/*
                    <FilterList showHeader={true} />
                    <Button onPress={()=> alert('apply filter!')}>
                        <Text style={textStyles.textStyle4}>APPLY FILTER</Text>
                    </Button>
*/ 

const mapStateToProps = (state) => ({
    locationFilter: state.card.locationFilter,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter)