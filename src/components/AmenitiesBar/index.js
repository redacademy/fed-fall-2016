import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import IconOptionalTitle from '../../icons/IconOptionalTitle'

class AmenitiesBar extends Component {
    static propTypes = {
        amenities: PropTypes.object.isRequired,
    }
    constructor() {
        super()
        this.state = {
            width: 0,
        }
    }
    render() {
        const { amenities } = this.props
        return (
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}
                onLayout={
                    (event) => {
                        this.setState({
                            width: event.nativeEvent.layout.width,
                        })
                    }
                }
                >
                {amenities.privacy ? <IconOptionalTitle size={(this.state.width / 4) * .9} iconName="mask" /> : null}
                {amenities.changeTable ? <IconOptionalTitle size={(this.state.width / 4) * .9} iconName="baby-change-table" /> : null}
                {amenities.familyWashroom ? <IconOptionalTitle size={(this.state.width / 4) * .9} iconName="family" /> : null}

                {/* // after women's and men's washroom signs are added
                    {(amenities.washroomGender.indexOf('women')+1) ? <IconOptionalTitle size={(this.state.width / 4) * .9} iconName="washroom-women" /> : null}
                    {(amenities.washroomGender.indexOf('men')+1) ? <IconOptionalTitle size={(this.state.width / 4) * .9} iconName="washroom-men" /> : null}
                */}

                {amenities.requiresKey ? <IconOptionalTitle size={(this.state.width / 4) * .9} iconName="key" /> : null}
                {amenities.strollerAccessible ? <IconOptionalTitle size={(this.state.width / 4) * .9} iconName="stroller-accessible" /> : <IconOptionalTitle size={60} iconName="stroller-inaccessible" />}
            </View>
        )
    }
}

export default AmenitiesBar
