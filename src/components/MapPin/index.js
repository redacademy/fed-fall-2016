import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Icon from '../Icon'

class MapPin extends Component {
    render() {
        return (
            <View>
                <Svg
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    width={this.props.scale * 118.51}
                    height={this.props.scale * 152.3}
                    >
                    <Path
                        d="M59.252,152.066c0,0,59.024-30.214,59.024-91.648c0-26.186-20.853-60.185-59.024-60.185	c-37.495,0-59.018,33.999-59.018,60.185C0.234,121.519,59.252,152.066,59.252,152.066z"
                        fill={this.props.pinColour}
                        scale={this.props.scale}
                        />
                    <View style={{ top: -4 * this.props.scale }}>
                        <Icon
                            name={this.props.iconName}
                            size={90 * this.props.scale}
                            color={this.props.iconColour ? this.props.iconColour : 'white'}
                            />
                    </View>
                </Svg>
            </View>
        )
    }
}

export default MapPin

// USAGE:
// import MapPin from '../MapPin' (or whatever)
// <MapPin scale="0.5" pinColour={rgbColours.apricot} iconName="add" />
// <MapPin scale="0.5" pinColour={rgbColours.apricot} iconName="add" iconColour="red" /> //to get red icons… or replace with whatever colour you want
