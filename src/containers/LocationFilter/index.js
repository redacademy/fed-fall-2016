import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { textStyles } from '../../config/styles'
import styles from './styles'
// Redux 
import { connect } from 'react-redux'
import {
    applyFilterToPins
} from '../../redux/actions'
// Components
import {
    Button,
    FilterList,
} from '../../components'

class LocationFilter extends Component {
    _handleOnPress() {
        let filters = []
        if (this.props.changeTable) filters.push({ changeTable: this.props.changeTable })
        if (this.props.nursingRoom) filters.push({ nursingRoom: this.props.nursingRoom })
        if (this.props.washroomMen) filters.push({ washroomMen: this.props.washroomMen })
        if (this.props.washroomWomen) filters.push({ washroomWomen: this.props.washroomWomen })
        if (this.props.washroomFamily) filters.push({ washroomFamily: this.props.washroomFamily })
        if (this.props.private) filters.push({ private: this.props.private })
        if (this.props.strollerAccessible) filters.push({ strollerAccessible: this.props.strollerAccessible })
        if (this.props.keyRequired) filters.push({ keyRequired: this.props.keyRequired })
        this.props.applyFilterToPins(filters)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    <FilterList showHeader={true} showFilterOnlyIfTrue={false} />
                </View>
                <Button onPress={() => this._handleOnPress()}>
                    <Text style={textStyles.textStyle4}>SUBMIT</Text>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    changeTable: state.filter.changeTable,
    nursingRoom: state.filter.nursingRoom,
    washroomMen: state.filter.washroomMen,
    washroomWomen: state.filter.washroomWomen,
    washroomFamily: state.filter.washroomFamily,
    private: state.filter.private,
    strollerAccessible: state.filter.strollerAccessible,
    keyRequired: state.filter.keyRequired,
})

const mapDispatchToProps = {
    applyFilterToPins,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter)