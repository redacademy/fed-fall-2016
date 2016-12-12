import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import IconMulti from '../IconMulti'

const iconRenderer = (name, size) => (
    <View
        style={{
            width: size + 18,
            borderWidth: 6,
            borderColor: 'transparent',
        }}
        >
        <IconMulti
            size={size}
            name={name}
            title
            noBorder
            />
    </View>
)

class AmenitiesBar extends Component {
    static propTypes = {
        amenities: PropTypes.object.isRequired,
    }
    constructor() {
        super()
        this.state = {
            size: 0,
        }
    }
    render() {
        const { amenities } = this.props
        const { size } = this.state
        return (
            <View
                onLayout={(event) => this.setState({ size: event.nativeEvent.layout.width / 4 })}
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}
                >
                {amenities.privacy ? iconRenderer('mask', size) : null}
                {amenities.changeTable ? iconRenderer('baby-change-table', size) : null}
                {amenities.washroomFemale ? iconRenderer('female', size) : null}
                {amenities.washroomMale ? iconRenderer('male', size) : null}
                {amenities.washroomFamily ? iconRenderer('family', size) : null}
                {amenities.requiresKey ? iconRenderer('key', size) : null}
                {amenities.strollerAccessible ? iconRenderer('stroller-accessible', size) : iconRenderer('stroller-inaccessible', size)}
            </View>
        )
    }
}

export default AmenitiesBar
