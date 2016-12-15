import React, { Component, PropTypes } from 'react'
import { buttonSize } from '../../config/styles'
import {
    Image
} from 'react-native'
import {
    MapDot,
    MapPin
} from '../../components'

class MapBlock extends Component {
    static proptTypes = {
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        pinScale: PropTypes.number,
        pinColor: PropTypes.string,
        iconName: PropTypes.string,
        useMapDot: PropTypes.bool,
    }
    render() {
        const url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.lat},${this.props.lng}&zoom=${this.props.zoom}&size=${this.props.width}x${this.props.height}&maptype=roadmap&label:%20&key=AIzaSyB2WkbsqNDjsiz8i831IVn1piVIq5OeiCI`

        return (
            <Image
                style={{
                    height: this.props.height,
                    width: this.props.width,
                    margin: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                source={{ url: url }}
                >
                {
                    this.props.useMapDot
                        ? <MapDot size={buttonSize.searchBar} />
                        : <MapPin
                            scale={this.props.pinScale}
                            amenities={{ nursingRoom: true, changeTable: true }}
                            />
                }
            </Image>
        )
    }
}

export default MapBlock


//USAGE:
// import { MapBlock } from '../components/MapBlock'
//<MapBlock lat={49.2634046} lng={-123.1404133} zoom={18} width={250} height={120} pinScale={0.4} pinColor={'red'} iconName={'starbaby-face'} />
