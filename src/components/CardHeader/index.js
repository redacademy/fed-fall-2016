import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import IconCircularBorder from '../../icons/IconCircularBorder'
import IconCircularFill from '../../icons/IconCircularFill'
import { colors } from '../../config/styles'
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
                        color={colors.salmon}
                        />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {this.props.alreadyRated ?
                        <IconCircularFill
                            size={this.state.width / 6}
                            name='new-entry'
                            fillColor={colors.salmon}
                            />
                        :
                        <IconCircularBorder
                            size={this.state.width / 6}
                            name='new-entry'
                            color={colors.salmon}
                            />
                    }
                    {this.props.alreadyFaved ?
                        <IconCircularFill
                            size={this.state.width / 6}
                            name='heart-off'
                            fillColor={colors.salmon}
                            />
                        :
                        <IconCircularBorder
                            size={this.state.width / 6}
                            name='heart-off'
                            color={colors.salmon}
                            />
                    }
                </View>

            </View>
        )
    }
}

export default LocationDetailsCardHeader
