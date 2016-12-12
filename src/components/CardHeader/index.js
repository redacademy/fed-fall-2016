import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { colors } from '../../config/styles'
import Icon from '../Icon'
import IconMulti from '../IconMulti'
import { babyFocusIconChooser } from '../../config/functions'

/**
example usage:
*************** to use the card header on location details ***************
<CardHeader
  alreadyRated={{code to look it up in realm database… it's a boolean, so it should just be true or false}}
  alreadyFaved={{code to look it up in realm database… it's a boolean, so it should just be true or false}}
  amenities={{amenities object from mongo database passed into here}}
  />
  
 */

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
            size: 0,
        }
    }

    render() {
        const { size } = this.state
        return (
            <View
                onLayout={this.props.width
                    ? () => this.setState({ size: this.props.width / 6 })
                    : (event) => {
                        this.setState({
                            size: event.nativeEvent.layout.width / 6,
                        })
                    }
                }
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                <View>
                    <Icon
                        size={size}
                        name={babyFocusIconChooser(this.props.amenities)}
                        color={colors.salmon}
                        />
                </View>
                <View style={{ flexDirection: 'row', width: size*2.25, justifyContent: 'space-between' }}>
                    {this.props.alreadyRated
                        ? <IconMulti
                            size={size}
                            name="new-entry"
                            fillColor={colors.salmon}
                            circular
                            />
                        : <IconMulti
                            size={size}
                            name="new-entry"
                            iconColor={colors.salmon}
                            border
                            circular
                            />
                    }
                    {this.props.alreadyFaved
                        ? <IconMulti
                            size={size}
                            name="heart-off"
                            fillColor={colors.salmon}
                            circular
                            />
                        : <IconMulti
                            size={size}
                            name="heart-off"
                            iconColor={colors.salmon}
                            border
                            circular
                            />
                    }
                </View>

            </View>
        )
    }
}

export default LocationDetailsCardHeader
