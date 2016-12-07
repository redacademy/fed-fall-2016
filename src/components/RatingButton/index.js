import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { styles } from './styles'
import Icon from '../Icon/index'

// positive={{iconName: 'thumbs-up', color: hexColors.lightGreyGreen}} negative={{iconName: 'thumbs-down', color: hexColors.salmon}

class RatingButton extends Component {
    static propTypes = {
        iconStates: PropTypes.array.isRequired,
        defaultStateIndex: PropTypes.number.isRequired,
        iconSize: PropTypes.number.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            iconStateIndex: 0,
            defaultStateIndex: 0,
            numberOfStates: 0,
            isDefault: true,
        }
    }
    componentWillMount() {
            this.setState({ 
                iconStateIndex: this.props.defaultStateIndex, 
                defaultStateIndex: this.props.defaultStateIndex, 
                numberOfStates: this.props.iconStates.length, })
    }
    handlePress() {
        const index = this.state.iconStateIndex,
            defaultIndex = this.state.defaultStateIndex,
            totalStates = this.state.numberOfStates

        // at the end of the array, start at 0
        if (index + 1 === totalStates) {   
            this.setState({ iconStateIndex: 0, isDefault: (0===defaultIndex), })
        }
        // set to the next state in the array
        else {
            this.setState({ iconStateIndex: index+1, isDefault: (index+1===defaultIndex), })
        }
    }

    render() {
        console.log('RatingButtonWithState props: ', this.props)
        return (
            <TouchableOpacity onPress={() => this.handlePress()}>
                {this.state.isDefault ?
                    <View style={styles.container}>
                        <View style={styles.buttonDefault}>
                            <Icon
                                style={styles.iconDefault}
                                name={this.props.iconStates[this.state.defaultStateIndex].iconName}
                                size={this.props.iconStates[this.state.defaultStateIndex].iconSize}
                                color={'#ffffff'} />
                        </View>
                        <Text style={styles.textDefault} >{this.props.iconStates[this.state.defaultStateIndex].iconText}</Text>
                    </View>
                    :
                    <View style={styles.container}>
                        <View style={styles.buttonSelected}>
                            <Icon
                                style={styles.iconSelected}
                                name={this.props.iconStates[this.state.iconStateIndex].iconName}
                                size={this.props.iconStates[this.state.iconStateIndex].iconSize}
                                color={'#e77474'} />
                        </View>
                        <Text style={styles.textSelected} >{this.props.iconStates[this.state.iconStateIndex].iconText}</Text>
                    </View>
                }
            </TouchableOpacity>
        )
    }
}

export default RatingButton


// USAGE:
// import RatingButton from '../RatingButton' 
// const ratingButtons = [
//     { iconName: 'quality-ribbon', text: 'QUALITY',},
//     { iconName: 'cleanliness', text: 'CLEAN', },
//     { iconName: 'breast-feeding', text: 'NURSING FRIENDLY', }, 
//     { iconName: 'quiet', text: 'QUIET',}, 
// ]
//
// <RatingButton ratingOptions={ratingButtons} />
