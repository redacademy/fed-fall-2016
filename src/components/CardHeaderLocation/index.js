import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { colors } from '../../config/styles'
import Icon from '../Icon'
import IconMulti from '../IconMulti'
import { babyFocusIconChooser } from '../../config/functions'

/*
 * this component has a couple variations:
 *      - it can have an icon for the location at the side, or not—determined by amenities being passed in
 *      - it can change its icons for the add-rating and add-fave button,
 *        determined by "alreadyRated" and "alreadyFaved" props being passed in

example usage:
*************** to use the card header on location details ***************
<CardHeaderLocation
  alreadyRated={{code to look it up in realm database… it's a boolean, so it should just be true or false}}
  alreadyFaved={{code to look it up in realm database… it's a boolean, so it should just be true or false}}
  amenities={{amenities object from mongo database passed into here}}
  />
  
 */



class CardHeaderLocation extends Component {
    static propTypes = {
        amenities: PropTypes.object.isRequired,
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
        const size = this.props.width ? this.props.width / 7.25 : this.state.size
        return (
            <View
                onLayout={this.props.width
                    ? () => this.setState({ size: this.props.width / 7.25 })
                    : (event) => {
                        this.setState({
                            size: event.nativeEvent.layout.width / 7.25,
                        })
                    }
                }
                style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}
                >
                <View>
                    <Icon
                        size={size}
                        name={babyFocusIconChooser(this.props.amenities)}
                        color={colors.salmon}
                        />
                </View>
                <View style={{ flexDirection: 'row-reverse', width: size * 2.25, justifyContent: 'space-between' }}>
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
                            onPressFn={this.props.onPressFn}
                            />
                    }
                    {this.props.alreadyRated
                        ?
                        null
                        : <IconMulti
                            size={size}
                            name="new-entry"
                            iconColor={colors.salmon}
                            border
                            circular
                            onPressFn={this.props.onPressFn}
                            />
                    }
                </View>

            </View>
        )
    }
}

export default CardHeaderLocation
