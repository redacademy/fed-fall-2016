import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Icon from '../../components/Icon'
import { colors } from '../../config/styles'

class IconRectangularBorder extends Component {
    static propTypes = {
        size: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
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
                        backgroundColor: 'transparent',
                        width: this.props.size,
                        height: this.props.size,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: this.props.size * 0.1,
                        borderColor: this.props.color || colors.blush,
                        borderWidth: this.props.size * 0.02,
                    }}
                    >
                    <Icon
                        name={this.props.name}
                        size={this.props.size * 0.7}
                        color={this.props.color || colors.blush}
                        style={{
                            backgroundColor: 'transparent',
                        }}
                        />
                </View>
            </View>
        )
    }
}

export default IconRectangularBorder
