import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Icon from '../../components/Icon'
import { colors } from '../../config/styles'

class IconRectangularFill extends Component {
    static propTypes = {
        size: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        fillColor: PropTypes.string,
        color: PropTypes.string,
    }
    render() {
        return (
            <View style={{
                width: this.props.size,
                height: this.props.size,
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <View
                    style={{
                        backgroundColor: this.props.fillColor || colors.blush,
                        width: this.props.size,
                        height: this.props.size,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: this.props.size * 0.1,
                    }}
                    >

                    <Icon
                        name={this.props.name}
                        size={this.props.size * 0.7}
                        color={this.props.color || colors.whiteTwo}
                        style={{ backgroundColor: 'transparent' }}
                        />
                </View>
            </View>
        )
    }
}

export default IconRectangularFill
