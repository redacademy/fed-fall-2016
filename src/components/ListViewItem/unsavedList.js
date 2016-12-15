import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import styles from './styles'
import Loader from '../Loader'
import RatingBar from '../RatingBar'
import MapPin from '../MapPin'
import { connect } from 'react-redux'
import { getStaticMap } from './getStaticMap'
import {
    setCardPosition,
    setSelectedCard,
} from '../../redux/actions'


import MapBlock from '../MapBlock'



class UnsavedListViewItem extends Component {

    render() {
        if (this.props.isLoading) {
            return (
                <Loader />
            )
        } else {
            const lat = this.props.location.geometry.location.lat
            const lng = this.props.location.geometry.location.lng


            return (
                <TouchableOpacity onPress={() => console.log('Save Location!')} >
                    <View style={styles.locationContainer}>
                        <MapBlock useMapDot={true} lat={lat} lng={lng} zoom={16} width={262} height={100} />
                    </View>
                </TouchableOpacity>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    selectedCard: state.card.selectedCard,
    isLoading: state.map.isLoading,
})


const mapDispatchToProps = {
    setCardPosition,
    setSelectedCard,
}


export default connect(mapStateToProps, mapDispatchToProps)(UnsavedListViewItem)
