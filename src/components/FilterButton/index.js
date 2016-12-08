import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { styles } from './styles'
import Icon from '../Icon/index'
import { colorPalette, textStyles } from '../../config/styles'
const { width, height } = Dimensions.get('window')

class FilterButton extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        iconText: PropTypes.string.isRequired,
        iconSize: PropTypes.number.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
            width: 0,
        }
        this.handlePress = this.handlePress.bind(this)
    }
    handlePress() {
        this.setState({ isSelected: !this.state.isSelected })

        if (this.props.onPress)
            this.props.onPress()
    }
    componentWillMount() {
        this.setState({
            isSelected: this.props.isSelected,
        })
    }
    render() {
        const containerStyle = {
            alignItems: 'center',
            height: (height - 20) / 5.5, //122?
            width: (width - 20) / 2, //113?
            justifyContent: 'space-around',
            // backgroundColor: 'yellow'
        }
        console.log('FilterButton props: ', this.props)
        return (
            <TouchableOpacity onPress={this.handlePress}>
                {this.state.isSelected ?
                    <View style={containerStyle}>
                        <View style={[styles.button, styles.buttonSelected]}>
                            <Icon style={[styles.icon, styles.iconSelected]} name={this.props.iconName} size={this.props.iconSize} color={colorPalette.white.hex} />
                        </View>
                        <Text style={textStyles.textStyle12} >{this.props.iconText}</Text>
                    </View>
                    :
                    <View style={containerStyle}>
                        <View style={[styles.button, styles.buttonDefault]}>
                            <Icon style={[styles.icon, styles.iconDefault]} name={this.props.iconName} size={this.props.iconSize} color={colorPalette.white.hex} />
                        </View>
                        <Text style={textStyles.textStyle11} >{this.props.iconText}</Text>
                    </View>
                }
            </TouchableOpacity>
        )
    }
}

export default FilterButton


// USAGE:
// import FilterButton from '../FilterButton' 
// const endFilterIcons = [
//     { iconName: 'mask', iconText: 'PRIVATE', },
//     { iconName: 'stroller-accessible', iconText: 'STROLLER ACCESSABLE', },
//     { iconName: 'quiet', iconText: 'QUIET', },
//     { iconName: 'key', iconText: 'REQUIRES KEY', },
// ]
//
// <FilterButton key={`key${i}`} iconName={filterIcon.iconName} iconText={filterIcon.iconText} iconSize={iconSize} />
