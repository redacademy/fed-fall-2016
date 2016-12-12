import React, { Component } from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Icon from '../Icon'
import { colors } from '../../config/styles'
import { mapPinColorChooser, babyFocusIconChooser } from '../../config/functions'

/** 
 * MapPin
 * Usage: 
<MapPin
    scale="0.5"
    amenities={put your amenities for the respective location here, which you're probably getting anyway when you pass in lng and lat}
    />

 * 
 */
class MapPin extends Component {
    render() {
        const { amenities, scale } = this.props
        return (
            <View>
                <Svg
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    width={scale * 118.51}
                    height={scale * 152.3}
                    >
                    <Path
                        d="M59.252,152.066c0,0,59.024-30.214,59.024-91.648c0-26.186-20.853-60.185-59.024-60.185	c-37.495,0-59.018,33.999-59.018,60.185C0.234,121.519,59.252,152.066,59.252,152.066z"
                        fill={mapPinColorChooser(amenities)}
                        scale={scale}
                        />
                    <View style={{ top: -4 * scale }}>
                        <Icon
                            name={babyFocusIconChooser(amenities)}
                            size={90 * scale}
                            color={colors.white}
                            />
                    </View>
                </Svg>
            </View>
        )
    }
}

export default MapPin
