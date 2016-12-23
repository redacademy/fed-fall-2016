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
        if (this.props.mensBathroom) filters.push({ mensBathroom: this.props.mensBathroom })
        if (this.props.womensBathroom) filters.push({ womensBathroom: this.props.womensBathroom })
        if (this.props.familyBathroom) filters.push({ familyBathroom: this.props.familyBathroom })
        if (this.props.privacy) filters.push({ privacy: this.props.privacy })
        if (this.props.strollerAccess) filters.push({ strollerAccess: this.props.strollerAccess })
        if (this.props.requiresKey) filters.push({ requiresKey: this.props.requiresKey })
        this.props.applyFilterToPins(filters)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    <FilterList showHeader={true} />
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
    mensBathroom: state.filter.mensBathroom,
    womensBathroom: state.filter.womensBathroom,
    familyBathroom: state.filter.familyBathroom,
    privacy: state.filter.privacy,
    strollerAccess: state.filter.strollerAccess,
    requiresKey: state.filter.requiresKey,
})

const mapDispatchToProps = {
    applyFilterToPins,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter)