import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { textStyles } from '../../config/styles'

// Redux 
import { connect } from 'react-redux'

// Components
import {
    Button,
    FilterList,
} from '../../components'

class LocationFilter extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <FilterList showHeader={true} />
                <Button onPress={() => alert('apply filter!')}>
                    <Text style={textStyles.textStyle4}>APPLY FILTER</Text>
                </Button>
            </View>
        )
    }
}
    /*
                <FilterList showHeader={true} />
                <Button onPress={() => alert('apply filter!')}>
                    <Text style={textStyles.textStyle4}>APPLY FILTER</Text>
                </Button>
    */

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter)