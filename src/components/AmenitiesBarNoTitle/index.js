import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Icon from '../../components/Icon'
import { colors } from '../../config/styles'

class AmenitiesBarNoTitle extends Component {
    static propTypes = {
        amenities: PropTypes.object.isRequired,
    }
    constructor() {
        super()
        this.state = {
            width: 0,
        }
    }
    render() {
        const { amenities } = this.props
        return (
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}
                onLayout={this.props.width
                    ? () => this.setState({ width: this.props.width })
                    : (event) => {
                        this.setState({
                            width: event.nativeEvent.layout.width,
                        })
                    }
                }
                >
                {amenities.privacy
                    ? <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="mask" /></View>
                    : null
                }
                {amenities.changeTable
                    ? <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="baby-change-table" /></View>
                    : null
                }
                {amenities.familyWashroom
                    ? <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="family" /></View>
                    : null
                }
                {(amenities.washroomGender.indexOf('women') + 1) 
                    ? <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="female" /></View>
                    : null
                }
                {(amenities.washroomGender.indexOf('men') + 1) 
                    ? <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="male" /></View>
                    : null
                }
                {amenities.requiresKey
                    ? <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="key" /></View>
                    : null
                }
                {amenities.strollerAccessible
                    ? <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="stroller-accessible" /></View>
                    : <View style={{height: this.props.width / 4, width: this.props.width / 4}}><Icon size={(this.state.width / 4) * .7} color={colors.warmGrey} name="stroller-inaccessible" /></View>
                }
            </View>
        )
    }
}

export default AmenitiesBarNoTitle
