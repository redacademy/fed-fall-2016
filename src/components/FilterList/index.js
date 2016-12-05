import React, { Component, PropTypes } from 'react'
import {
    View, Text
} from 'react-native'
import { styles } from './style'
import FilterButton from '../FilterButton'

const iconSize = 170
const begFilterIcons = [
    { iconName: 'baby-change-table', iconText: 'CHANGE TABLE', isSelected: true, },
    { iconName: 'bottle', iconText: 'NURSING ROOM', },
]
const endFilterIcons = [
    { iconName: 'mask', iconText: 'PRIVATE', },
    { iconName: 'stroller-accessible', iconText: 'STROLLER ACCESSABLE', isSelected: true, },
    { iconName: 'quiet', iconText: 'QUIET', },
    { iconName: 'key', iconText: 'REQUIRES KEY', },
]
const bathroomButtonOptionsLeft = [
    { iconName: 'male-and-female', iconText: 'BOTH WC', },
    { iconName: 'microphone', iconText: 'MENS WC', },       //TODO: sub with "man" icon
    { iconName: 'cleanliness', iconText: 'WOMENS WC', },    //TODO: sub with "woman icon"
]
const bathroomButtonOptionsRight = [
    { iconName: 'family', iconText: 'FAMILY WC', },         //RHS default to family
    { iconName: 'cleanliness', iconText: 'WOMENS WC', },    //TODO: sub with "woman icon"
]

class FilterList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBathroomIndexLeft: 0,
            selectedBathroomIndexRight: 0,
            isSelectingBathroom: false,
        }
        this.handleBathroomButtonOptionsLeftPress = this.handleBathroomButtonOptionsLeftPress.bind(this)
        this.handleBathroomButtonOptionsRightPress = this.handleBathroomButtonOptionsRightPress.bind(this)
    }

    handleBathroomButtonOptionsLeftPress() {
        // if current state isSelectingBathroom, 
        //   then we already have the male/female select options open... 
        //   so now we are selecting male (left button option). set selectedBathroomIndex to male (1)
        //    => selectedBathroomIndex = 1
        //    => isSelectingBathroom = false
        // else 
        //   we want to select male/female
        //   set isSelectingBathroom to true

        console.log(this.state)
        if (this.state.isSelectingBathroom) {
            this.setState({ selectedBathroomIndexLeft: 1, selectedBathroomIndexRight: 0, isSelectingBathroom: false, })
        } else {
            this.setState({ selectedBathroomIndexLeft: 1, selectedBathroomIndexRight: 1, isSelectingBathroom: true, })
        }
    }
    handleBathroomButtonOptionsRightPress() {
        // if current state isSelectingBathroom, 
        //   then we already have the male/female select options open... 
        //   so now we are selecting female (right button option). set selectedBathroomIndex to female (2)
        //    => selectedBathroomIndex = 1
        //    => isSelectingBathroom = false
        // else 
        // we are just doing the regular action for the family washroom.
        console.log(this.state)
        if (this.state.isSelectingBathroom) {
            this.setState({ selectedBathroomIndexLeft: 2, selectedBathroomIndexRight: 0, isSelectingBathroom: false, })
        }
    }
    render() {
        return (
            <View style={styles.outerContainer}>
                <Text style={styles.instructions}>tap to select filter</Text>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        {
                            begFilterIcons.map((filterIcon, i) => (
                                <FilterButton key={`beg${i}`} iconName={filterIcon.iconName} iconText={filterIcon.iconText} iconSize={iconSize} />
                            ))
                        }
                        {
                            <View style={(this.state.isSelectingBathroom ? { flexDirection: 'row', borderRadius: 12, borderColor: '#969696', borderWidth: 1 } : { flexDirection: 'row', })}>
                                <FilterButton
                                    onPress={this.handleBathroomButtonOptionsLeftPress}
                                    iconName={bathroomButtonOptionsLeft[this.state.selectedBathroomIndexLeft].iconName}
                                    iconText={bathroomButtonOptionsLeft[this.state.selectedBathroomIndexLeft].iconText}
                                    isSelected={false}
                                    iconSize={iconSize} />
                                {
                                    this.state.isSelectingBathroom ?
                                        <FilterButton
                                            onPress={this.handleBathroomButtonOptionsRightPress}
                                            iconName={bathroomButtonOptionsRight[this.state.selectedBathroomIndexRight].iconName}
                                            iconText={bathroomButtonOptionsRight[this.state.selectedBathroomIndexRight].iconText}
                                            isSelected={false}
                                            iconSize={iconSize} />
                                        :

                                        null
                                }
                                {
                                    this.state.isSelectingBathroom ?
                                        null
                                        :

                                        <FilterButton
                                            onPress={this.handleBathroomButtonOptionsRightPress}
                                            iconName={bathroomButtonOptionsRight[this.state.selectedBathroomIndexRight].iconName}
                                            iconText={bathroomButtonOptionsRight[this.state.selectedBathroomIndexRight].iconText}
                                            isSelected={false}
                                            iconSize={iconSize} />
                                }
                            </View>
                        }
                        {
                            endFilterIcons.map((filterIcon, i) => (
                                <FilterButton key={`end${i}`} iconName={filterIcon.iconName} iconText={filterIcon.iconText} iconSize={iconSize} />
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
    3) need male/female icons
    4) need to add Submit button 
------------------------------

                            <View style={{flexDirection: 'row',}}>
                                <FilterButton 
                                    onPress={()=> { alert('pass in onPress!')}}
                                    iconName={bathroomButtonOptionsRight[0].iconName} iconText={bathroomButtonOptionsRight[0].iconText} iconSize={iconSize} />
                                <FilterButton iconName={bathroomButtonOptionsRight[1].iconName} iconText={bathroomButtonOptionsRight[1].iconText} iconSize={iconSize} />
                            </View>
*/