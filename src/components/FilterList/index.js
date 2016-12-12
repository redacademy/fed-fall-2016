import React, { Component, PropTypes } from 'react'
import {
    View, Text
} from 'react-native'
import { styles } from './styles'
import FilterButton from '../FilterButton'
import  {filterList} from '../../assets/constants'

const iconSize = 170

class FilterList extends Component {
    static proptTypes = {
        showHeader: PropTypes.bool,
    }

    render() {
        return (
            <View style={styles.outerContainer}>
                {this.props.showHeader? <Text style={styles.instructions}>tap to select filter</Text> : null}
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        {
                            filterList.map((filterIcon, i) => (
                            <FilterButton key={`filter${i}`} iconName={filterIcon.iconName} iconText={filterIcon.iconText} iconSize={iconSize} isSelected={filterIcon.isSelected}/>
                            ))
                        }
                    </View>
                </View>
            </View>
        )
    }
}

export default FilterList

/*
TODO: 
    DONE ---1) Add a border around when selecting between male/female options
    2) inital state when selecting should be unselected
    DONE ---3) need male/female icons
    4) need to add Submit button 
------------------------------
*/