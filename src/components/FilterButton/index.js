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
const { width, height } = Dimensions.get('window')

const containerStyle = {
    alignItems: 'center',
    height: (height - 20) / 5.5,
    width: (width - 20) / 2,
    justifyContent: 'space-around',
}
class FilterButton extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        altIconName: PropTypes.string,
        iconSize: PropTypes.number.isRequired,
        isSelected: PropTypes.bool,
        readOnly: PropTypes.bool,
    }
    constructor() {
        super()
        this.state = {
            isSelected: false,
            width: 0,
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

                // console.log('_handlePress state', this.state)
        }
    }
    componentDidMount() {
            this.setState({ isSelected: this.props.isSelected })

            if(this.props.altIconName) this.setState({ altIconName: this.props.altIconName }) 
                else this.setState({ altIconName: this.props.iconName }) 
            if(this.props.altIconText) this.setState({ altIconText: this.props.altIconText })
                else this.setState({ altIconText: this.props.iconText }) 

                // console.log('componentDidMount state', this.state)
    }
    render() {
        return (
            <TouchableOpacity onPress={this._handlePress}>
                {this.state.isSelected ?
                    <View style={containerStyle}>
                        <View style={[styles.button, styles.buttonSelected]}>
                            <Icon style={[styles.icon, styles.iconSelected]} name={this.props.iconName} size={this.props.iconSize} color={colors.white} />
                        </View>
                        <Text style={textStyles.textStyle12} >{this.props.iconText}</Text>
                    </View>
                    :
                    <View style={containerStyle}>
                        <View style={[styles.button, styles.buttonDefault]}>
                            <Icon style={[styles.icon, styles.iconDefault]} name={this.state.altIconName} size={this.props.iconSize} color={colors.white} />
                        </View>
                        <Text style={textStyles.textStyle11} >{this.state.altIconText}</Text>
                    </View>
                }
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => ({
    //     changeTable: state.card.changeTable,
    //     nursingRoom: state.card.nursingRoom,
    //     mensBathroom: state.card.mensBathroom,
    //     womensBathroom: state.card.womensBathroom,
    //     familyBathroom: state.card.familyBathroom,
    //     private: state.card.private,
    //     strollerAccess: state.card.strollerAccess,
    //     requiresKey: state.card.requiresKey,
})

const mapDispatchToProps = {
    updateFilterValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)
// export default FilterButton

// USAGE:
// import FilterButton from '../FilterButton' 
// const endFilterIcons = [
//     { iconName: 'mask', },
//     { iconName: 'stroller-accessible', },
//     { iconName: 'quiet, },
//     { iconName: 'key', isSelected: true, },
// ]
//
// <FilterButton key={`key${i}`} iconName={filterIcon.iconName} iconSize={iconSize} />


                //  (off state)
                // <IconMulti
                // name="baby-change-table"
                // title
                // border
                // />

                // (on state)
                // <IconMulti
                // name="baby-change-table"
                // fillColor={colors.blush}
                // circular
                // title
                // />
/*

            <TouchableOpacity onPress={this._handlePress}>
                {this.state.isSelected ?
                    <View style={containerStyle}>
                        <View style={[styles.button, styles.buttonSelected]}>
                            <Icon style={[styles.icon, styles.iconSelected]} name={this.props.iconName} size={this.props.iconSize} color={colors.white} />
                        </View>
                        <Text style={textStyles.textStyle12} >{this.props.iconText}</Text>
                    </View>
                    :
                    <View style={containerStyle}>
                        <View style={[styles.button, styles.buttonDefault]}>
                            <Icon style={[styles.icon, styles.iconDefault]} name={this.state.altIconName} size={this.props.iconSize} color={colors.white} />
                        </View>
                        <Text style={textStyles.textStyle11} >{this.props.iconText}</Text>
                    </View>
                }
            </TouchableOpacity>
*/