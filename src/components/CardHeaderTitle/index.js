import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../config/styles'
import Icon from '../Icon'
import IconMulti from '../IconMulti'
import { babyFocusIconChooser } from '../../config/functions'

/*
 * this component has a couple variations:
 *      - it can have an icon for the location at the side, or not—determined by amenities being passed in
 *      - it can have a boldTitle or not, depending on titleBold

example usage:
*************** to use the card header on the rating card details ***************
<CardHeaderTitle
  amenities={{amenities object from mongo database passed into here}}
  title="Please rate"
  />

*************** to use the card header on the user's card details ***************
<CardHeaderTitle
    title="Mandi Face"
    titleBold
    />
 */



class CardHeaderTitle extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        titleBold: PropTypes.bool,
        amenities: PropTypes.object,
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
                    ? () => this.setState({ size: this.props.width / 7.25 })
                    : (event) => {
                        this.setState({
                            size: event.nativeEvent.layout.width / 7.25,
                        })
                    }
                }
                style={{ height: size, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >
                <View style={{ flex: 1 }} >
                    {this.props.amenities ?
                        <Icon
                            size={size}
                            name={babyFocusIconChooser(this.props.amenities)}
                            color={colors.salmon}
                            />
                        : null}
                </View>
                <View style={{ flex: 3, alignItems: 'center', alignSelf: 'flex-end' }} >
                    {this.props.titleBold
                        ?
                        <Text style={{ fontFamily: 'Rubik-Medium', fontSize: 24, color: colors.darkGreyBlue }}>
                            {this.props.title}
                        </Text>
                        :
                        <Text style={{ fontFamily: 'Rubik-Light', fontSize: 24, color: colors.warmGreyTwo }}>
                            {this.props.title}
                        </Text>
                    }
                </View>
                <View style={{ flex: 1 }} />


            </View>
        )
    }
}

export default CardHeaderTitle
