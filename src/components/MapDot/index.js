import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { colors } from '../../config/styles'

/*
 * this component is one of the most straightforward:
example usage:
*************** to use the dot in place ***************
<MapDot
    size={100}
    />

*************** to use the dot in place, defining your own color ***************
<MapDot
    color="goldenrod"
    size={100}
    />
 */

class MapDot extends Component {
    static propTypes = {
        size: PropTypes.number.isRequired,
    }
    render() {
        const { size, color } = this.props
        return (
            <View style={{
                height: size,
                width: size,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: size * 0.5,
            }}>
                <View style={{
                    height: size * 0.51,
                    width: size * 0.51,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: size * 0.51 * 0.5,
                }}>
                    <View style={{
                        height: size * 0.38,
                        width: size * 0.38,
                        backgroundColor: color || colors.blush,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: size * 0.38 * 0.5,
                    }}>
                    </View>
                </View>
            </View>
        )
    }
}

export default MapDot
