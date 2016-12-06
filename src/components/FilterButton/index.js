import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { styles } from './style'
import Icon from '../Icon/index'

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
        }
        this.handlePress = this.handlePress.bind(this)
    }
    handlePress() {
        this.setState({ isSelected: !this.state.isSelected, })

        if(this.props.onPress)
            this.props.onPress()
    }
    componentWillMount() {
        console.log('FilterButton componentWillMount  props:', this.props)
            this.setState({ 
                isSelected: this.props.isSelected, })
    }
    render() {
        console.log('FilterButton props: ', this.props)
        return (
            <TouchableOpacity onPress={this.handlePress}>
                {this.state.isSelected ?
                    <View style={styles.container}>
                        <View style={styles.buttonSelected}>
                            <Icon style={styles.iconSelected} name={this.props.iconName} size={this.props.iconSize} color={'#ffffff'} />
                        </View>
                        <Text style={styles.textSelected} >{this.props.iconText}</Text>
                    </View>
                    :
                    <View style={styles.container}>
                        <View style={styles.buttonDefault}>
                            <Icon style={styles.iconDefault} name={this.props.iconName} size={this.props.iconSize} color={'#ffffff'} />
                        </View>
                        <Text style={styles.textDefault} >{this.props.iconText}</Text>
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
