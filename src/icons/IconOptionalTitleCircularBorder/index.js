import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Icon from '../../components/Icon'
import { colors } from '../../config/styles'
import iconTitleMapper from '../../config/icon-title-mapping'

/** 
 * IconOptionalTitleCircularBorder
 * 
 * this is essentially the same as IconOptionalTitle, except that the icon has a circular border
 */
class IconOptionalTitleCircularBorder extends Component {
    static propTypes = {
        size: PropTypes.number.isRequired,
        iconName: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        title: PropTypes.string,
        noTitle: PropTypes.bool,
    }
    render() {
        return (
            <View style={{
                width: this.props.size * 1.1, // design spec has text wider than the icons, so this allows for that
                height: (this.props.size * 1.1) + 45,
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <View
                    style={{
                        backgroundColor: 'transparent',
                        width: this.props.size,
                        height: this.props.size,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: this.props.size * 0.5,
                        borderColor: this.props.iconColor || colors.warmGrey,
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
                        color={this.props.iconColor || colors.warmGrey}
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
                            color: this.props.iconColor || colors.warmGrey,
                            letterSpacing: 0,
                        }}>{this.props.title || iconTitleMapper[this.props.iconName]}</Text>
                    </View>
                }
            </View>
        )
    }
}

export default IconOptionalTitleCircularBorder
