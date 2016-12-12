import React, { Component } from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Icon from '../Icon'
import { colors } from '../../config/styles'
import { mapPinColorChooser, babyFocusIconChooser } from '../../config/functions'

/** 
 * MapPin
 * Usage: 
 * 
 * <MapPin scale="0.5" pinColor={colors.apricot} iconName="add" />
 *
 * to get red icons… or replace with whatever color you want
 * <MapPin scale="0.5" pinColor={colors.apricot} iconName="add" iconColor="red" /> 
 * 
 */
class MapPin extends Component {
    render() {
      const { amenities } = this.props.amenities
        return (
            <View>
                <Svg
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    width={this.props.scale * 118.51}
                    height={this.props.scale * 152.3}
                    >
                    <Path
                        d="M59.252,152.066c0,0,59.024-30.214,59.024-91.648c0-26.186-20.853-60.185-59.024-60.185	c-37.495,0-59.018,33.999-59.018,60.185C0.234,121.519,59.252,152.066,59.252,152.066z"
                        fill={mapPinColorChooser(amenities)}
                        scale={this.props.scale}
                        />
                    <View style={{ top: -4 * this.props.scale }}>
                        <Icon
                            name={babyFocusIconChooser(amenities)}
                            size={90 * this.props.scale}
                            color={colors.white}
                            />
                    </View>
                </Svg>
            </View>
        )
    }
}

export default MapPin
