import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Icon from '../../components/Icon'
import { rgbColors } from '../../config/styles'
import iconTitleMapper from '../../config/icon-title-mapping'

class IconOptionalTitleRectangularBorder extends Component {
    render() {
        return (
            <View style={{
                width: this.props.size * 1.1, // design spec has text wider than the icons, so this allows for that
                alignItems: 'center',
            }}>
                <View
                    style={{
                        backgroundColor: this.props.backgroundColor,
                        borderRadius: this.props.size * 0.1,
                        width: this.props.size,
                        height: this.props.size,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                    <Icon
                        name={this.props.iconName}
                        size={this.props.size * 0.7}
                        // If needed, to resize cleanliness and quiet based on design-spec,
                        // then size code could be implemeted this way:
                        // (this.props.iconName === 'cleanliness' || this.props.iconName === 'quiet')
                        // ? this.props.size * 0.5
                        // : this.props.size * 0.7
                        color={this.props.iconColor || rgbColors.whiteTwo}
                        style={{
                            backgroundColor: 'transparent',
                        }}
                        />
                </View>
                {this.props.noTitle
                    ? null
                    : <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 6,
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'Rubik-Regular',
                            fontSize: iconTitleMapper[this.props.iconName].length > 8
                                ? 13
                                : 15,
                            color: this.props.iconColor || rgbColors.warmGrey,
                            letterSpacing: 0,
                        }}>{this.props.title || iconTitleMapper[this.props.iconName]}</Text>
                    </View>
                }
            </View>
        )
    }
}

IconOptionalTitleRectangularBorder.propTypes = {
    size: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    title: PropTypes.string,
    noTitle: PropTypes.bool,
}

export default IconOptionalTitleRectangularBorder

// USAGE:
// there are no default fillColors, so you'll have to pass a color into the "backgroundColor" prop
// 
// a normal usage would be like this:
// <IconWithTitle
//     backgroundColor={hexColors.apricot}
//     size={60}
//     iconName="cleanliness"
//     />
// 
// 
// you can also override the iconColor and title props
// <IconWithTitle
//     backgroundColor={hexColors.apricot}
//     size={60}
//     iconColor="white"
//     iconName="cleanliness"
//     title="CLEAN"
//     />
// 
// 
// there is a noTitle prop as well that disables the title... this is the style used in the ListView
