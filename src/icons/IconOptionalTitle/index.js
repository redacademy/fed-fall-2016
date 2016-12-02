import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Icon from '../../components/Icon'
import { rgbColours } from '../../config/styles'
import iconTitleMapper from '../../config/icon-title-mapping'

class IconOptionalTitle extends Component {
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
                                ? 13
                                : 15,
                            color: this.props.iconColor || rgbColours.warmGrey,
                            letterSpacing: 0,
                        }}>{this.props.title || iconTitleMapper[this.props.iconName]}</Text>
                    </View>
                }
            </View>
        )
    }
}

IconOptionalTitle.propTypes = {
    size: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    title: PropTypes.string,
    noTitle: PropTypes.bool,
}

export default IconOptionalTitle

// USAGE:
// 
// this produces an icon in grey with a title below it that is cross-referenced
// with the icon-title-mapping object to fill in the title below it
// <IconOptionalTitle
//     size={60}
//     iconName="quality-ribbon"
//     />
// 
// 
// optionally there are props of iconColor and title, if you want to override the defaults:
// <IconOptionalTitle
//     size={60}
//     iconColor="green"
//     iconName="quality-ribbon"
//     title="BABIES!!!"
//     />
// 
// 
// there is also a prop "noTitle", which omits the title from below the icon… would produce
// something similar to the <Icon /> component, but with a padding box
// <IconOptionalTitle
//     size={60}
//     iconColor="green"
//     iconName="quality-ribbon"
//     noTitle
//     />
