import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import IconMulti from '../IconMulti'
import styles from './styles'
import { colors } from '../../config/styles'

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
        const size = this.props.size ? this.props.size : this.state.size
        return (
            <View
                onLayout={
                    (event) => {
                        if (!this.props.size) {
                            this.setState({
                                size: event.nativeEvent.layout.width / 4,
                            })
                        }
                    }
                }
                style={[styles.amenitiesContainer, {borderRadius: size * .1, borderColor: colors.whiteTwo, borderWidth: 4, backgroundColor: 'white'}]}
                >
                {amenities.private ? iconRenderer('mask', size) : null}
                {amenities.changeTable ? iconRenderer('baby-change-table', size) : null}
                {amenities.nursingRoom ? iconRenderer('breast-feeding', size) : null}
                {amenities.washroomWomen ? iconRenderer('female', size) : null}
                {amenities.washroomMen ? iconRenderer('male', size) : null}
                {amenities.washroomFamily ? iconRenderer('family', size) : null}
                {amenities.keyRequired ? iconRenderer('key', size) : null}
                {amenities.strollerAccessible ? iconRenderer('stroller-accessible', size) : iconRenderer('stroller-inaccessible', size)}
            </View>
        )
    }
}

export default AmenitiesBar
