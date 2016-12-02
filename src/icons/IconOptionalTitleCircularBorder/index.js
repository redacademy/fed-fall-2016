import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Icon from '../../components/Icon'
import { rgbColours } from '../../config/styles'
import iconTitleMapper from '../../config/icon-title-mapping'

class IconOptionalTitleCircularBorder extends Component {
    render() {
        return (
            <View style={{
                width: this.props.size * 1.1, // design spec has text wider than the icons, so this allows for that
                alignItems: 'center',
            }}>
                <View
                    style={{
                        backgroundColor: 'transparent',
                        width: this.props.size,
                        height: this.props.size,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: this.props.size * 0.5,
                        borderColor: this.props.iconColor || 'grey',
                        borderWidth: this.props.size * 0.03,
                    }}
                    >
                    <Icon
                        name={this.props.iconName}
                        size={this.props.size * 0.55}
                        // If needed, to resize cleanliness and quiet based on design-spec,
                        // then size code could be implemeted this way:
                        // (this.props.iconName === 'cleanliness' || this.props.iconName === 'quiet')
                        // ? this.props.size * 0.5
                        // : this.props.size * 0.7
                        color={this.props.iconColor || rgbColours.warmGrey}
                        style={{
                            backgroundColor: 'transparent',
                            opacity: 0.9,
                        }}
                        />
                </View>
                {this.props.noTitle
                    ? null
                    : <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 7.5,
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'Rubik-Regular',
                            fontSize: iconTitleMapper[this.props.iconName].length > 8
                                ? this.props.size * 0.22
                                : this.props.size * 0.25,
                            color: this.props.iconColor || rgbColours.warmGrey,
                            letterSpacing: 0,
                        }}>{this.props.title || iconTitleMapper[this.props.iconName]}</Text>
                    </View>
                }
            </View>
        )
    }
}

IconOptionalTitleCircularBorder.propTypes = {
    size: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    title: PropTypes.string,
}

export default IconOptionalTitleCircularBorder

// USAGE:
// this is essentially the same as IconOptionalTitle, except that the icon has a circular border
