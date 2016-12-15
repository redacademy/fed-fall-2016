import React, { Component, PropTypes } from 'react'
import {
    View, Text
} from 'react-native'
import { styles } from './styles'
import FilterButton from '../FilterButton'
import { filterList } from '../../assets/constants'

const iconSize = 170

class FilterList extends Component {
    static proptTypes = {
        showHeader: PropTypes.bool.isRequired,
        readOnly: PropTypes.bool.isRequired,
        filterList: PropTypes.array,
        providingFilters: PropTypes.bool.isRequired,
    }
    constructor(props) {
        super(props)

        this.state = {
            filters: [],
        }
    }
    componentDidMount() {
        if (this.props.providingFilters)
            this.setState({ filters: this.props.filterList })
        else
            this.setState({ filters: filterList })
    }
    render() {
        return (
            <View style={styles.outerContainer}>
                {this.props.showHeader ? <Text style={styles.instructions}>tap to select filter</Text> : null}
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        {
                            this.state.filters.map((filterIcon, i) => (
                                <FilterButton key={`filter${i}`} iconName={filterIcon.iconName} iconText={filterIcon.iconText} altIconName={filterIcon.altIconName} altIconText={filterIcon.altIconText} iconSize={iconSize} isSelected={filterIcon.isSelected} readOnly={this.props.readOnly} />
                            ))
                        }
                    </View>
                </View>
            </View>
        )
    }
}

export default FilterList
