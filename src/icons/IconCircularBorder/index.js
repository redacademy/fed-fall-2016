import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Icon from '../../components/Icon'
import { rgbColors } from '../../config/styles'

class IconCircularBorder extends Component {
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
                        borderRadius: this.props.size * 0.6,
                        borderColor: this.props.color || rgbColors.warmGrey,
                        borderWidth: this.props.size * 0.03,
                    }}
                    >
                    <Icon
                        name={this.props.name}
                        size={this.props.size * 0.55}
                        color={this.props.color || rgbColors.warmGrey}
                        style={{
                            backgroundColor: 'transparent',
                            opacity: 0.9,
                        }}
                        />
                </View>
            </View>
        )
    }
}

export default IconCircularBorder
