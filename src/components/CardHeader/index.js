import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import IconCircularBorder from '../../icons/IconCircularBorder'
import IconCircularFill from '../../icons/IconCircularFill'
import { rgbColors } from '../../config/styles'
import Icon from '../Icon'
import { babyFocusIconChooser } from '../../config/functions'

class LocationDetailsCardHeader extends Component {
    static propTypes = {
        changing: PropTypes.bool,
        feeding: PropTypes.bool,
        alreadyRated: PropTypes.bool,
        alreadyFaved: PropTypes.bool,
    }

    constructor() {
        super()
        this.state = {
            width: 0,
        }
    }

    render() {
        return (
            <View
                onLayout={this.props.width
                    ? () => this.setState({ width: this.props.width })
                    : (event) => {
                        this.setState({
                            width: event.nativeEvent.layout.width,
                        })
                    }
                }
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                <View>
                    <Icon
                        size={this.state.width / 6}
                        name={babyFocusIconChooser(this.props.changing, this.props.feeding)}
                        color={rgbColors.salmon}
                        />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {this.props.alreadyRated ?
                        <IconCircularFill
                            size={this.state.width / 6}
                            name='new-entry'
                            fillColor={rgbColors.salmon}
                            />
                        :
                        <IconCircularBorder
                            size={this.state.width / 6}
                            name='new-entry'
                            color={rgbColors.salmon}
                            />
                    }
                    {this.props.alreadyFaved ?
                        <IconCircularFill
                            size={this.state.width / 6}
                            name='heart-off'
                            fillColor={rgbColors.salmon}
                            />
                        :
                        <IconCircularBorder
                            size={this.state.width / 6}
                            name='heart-off'
                            color={rgbColors.salmon}
                            />
                    }
                </View>

            </View>
        )
    }
}

export default LocationDetailsCardHeader
