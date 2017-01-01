import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {
    updateFilterValue,
} from '../../redux/actions'
import { connect } from 'react-redux'
import { styles } from './styles'
// import IconMulti from '../IconMulti'
import Icon from '../Icon/index'
import { colors, textStyles } from '../../config/styles'

class FilterButton extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        altIconName: PropTypes.string,
        isSelected: PropTypes.bool,
        readOnly: PropTypes.bool,
        noButton:PropTypes.bool
    }
    constructor() {
        super()
        this.state = {
            isSelected: false,
            altIconName: 'marker',
            altIconText: 'marker',
        }
        this._handlePress = this._handlePress.bind(this)
    }
    _handlePress() {
        if (!this.props.readOnly) {
            this.props.updateFilterValue(this.props.iconName, !this.state.isSelected)
            this.setState({ isSelected: !this.state.isSelected })

            if (this.props.onPress)
                this.props.onPress()
        }
    }
    componentDidMount() {
        this.setState({ isSelected: this.props.isSelected })

        if (this.props.altIconName) this.setState({ altIconName: this.props.altIconName })
        else this.setState({ altIconName: this.props.iconName })
        if (this.props.altIconText) this.setState({ altIconText: this.props.altIconText })
        else this.setState({ altIconText: this.props.iconText })
    }
    render() {
        if (this.props.noButton === true) {
            // for LocationPreview
            return (
                <TouchableOpacity onPress={this._handlePress}>
                    {
                        <View style={styles.noButtonContainerStyle}>
                            <View style={[styles.noButton, styles.buttonDefault]}>
                                <Icon style={[styles.icon, styles.iconDefault]} name={this.props.iconName} color={colors.white} />
                            </View>
                            <Text style={[textStyles.textStyle7, styles.noButtonText]} >{this.props.iconText}</Text>
                        </View>
                    }
                </TouchableOpacity>
            )
        } else {
            // for FilterList and LocationAdd
            return (
                <TouchableOpacity onPress={this._handlePress}>
                    {
                        this.state.isSelected ?
                            <View style={styles.containerStyle}>
                                <View style={[styles.button, styles.buttonSelected]}>
                                    <Icon style={[styles.icon, styles.iconSelected]} name={this.props.iconName} color={colors.white} />
                                </View>
                                <Text style={textStyles.textStyle12} >{this.props.iconText}</Text>
                            </View>
                            :
                            <View style={styles.containerStyle}>
                                <View style={[styles.button, styles.buttonDefault]}>
                                    <Icon style={[styles.icon, styles.iconDefault]} name={this.state.altIconName} color={colors.white} />
                                </View>
                                <Text style={textStyles.textStyle11} >{this.state.altIconText}</Text>
                            </View>
                    }
                </TouchableOpacity>
            )
        }
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    updateFilterValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)

// USAGE:
// import FilterButton from '../FilterButton' 
// const endFilterIcons = [
//     { iconName: 'mask', },
//     { iconName: 'stroller-accessible', },
//     { iconName: 'quiet, },
//     { iconName: 'key', isSelected: true, },
// ]
//
// <FilterButton key={`key${i}`} iconName={filterIcon.iconName}/>