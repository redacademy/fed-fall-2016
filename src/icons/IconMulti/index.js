import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Icon from '../../components/Icon'
import { rgbColors } from '../../config/styles'
import iconTitleMapper from '../../config/icon-title-mapping'

/**
example usage:
*************** to make the buttons for the filter list ***************
(off state)
<IconMulti
  name="baby-change-table"
  title
  noBorder
  />

(on state)
<IconMulti
  name="baby-change-table"
  fillColor={rgbColors.blush}
  circular
  title
  />
***********************************************************************
**/

class IconMulti extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,  // the name of the icon
        fillColor: PropTypes.string,        // gives the icon a fillColor, rather than a border
        iconColor: PropTypes.string,        // pass in the color for the icon… also does the border if it's not filled
        title: PropTypes.bool,              // figures out the title from the src/config/icon-title-mapping
        size: PropTypes.number,             // expands to fill the bounds of the View (or whatever) it's contained within
        circular: PropTypes.bool,           // defaults to square if nothing
        noBorder: PropTypes.bool,           // omits the border
    }

    constructor() {
        super()
        this.state = {
            size: 0,
        }
    }

    render() {
        const size = this.props.size ? this.props.size : this.state.size
        const { circular, iconColor, fillColor, name, title, noBorder } = this.props
        return (
            <View
                onLayout={(event) => this.setState({ size: event.nativeEvent.layout.width })}
                style={{ alignItems: 'center', justifyContent: 'flex-start' }}
                >
                <View style={
                    {
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: size,
                        height: size,
                        backgroundColor: fillColor || 'transparent',
                        borderRadius: size * (circular ? 0.5 : 0.1),
                        borderColor: iconColor || rgbColors.warmGrey,
                        borderWidth: (fillColor || noBorder) ? null : size * 0.02,
                    }}
                    >
                    <View>
                        <Icon
                            name={name}
                            size={size * (circular ? 0.5 : 0.75)}
                            color={iconColor || (fillColor ? rgbColors.whiteTwo : rgbColors.warmGrey)}
                            style={{ backgroundColor: 'transparent' }}
                            />
                    </View>
                </View>
                {title
                    ? <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 7.5,
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'Rubik-Regular',
                            fontSize: 15,
                            color: rgbColors.warmGrey,
                        }}>
                            {iconTitleMapper[name]}
                        </Text>
                    </View>
                    : null
                }
            </View>
        )
    }
}

export default IconMulti
