import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Text
} from 'react-native'
import styles from './styles'
import ListViewItem from '../ListViewItem'
import { getLocationDetails } from '../../redux/actions'
import { connect } from 'react-redux'

const mongoFilter = (arrayToFilter, googlePlaceId) => arrayToFilter.filter((pin) => {
    if (pin.obj.placeId === googlePlaceId) {
        return pin
    }
})

class LocationListView extends Component {

    componentWillMount() {
        this.props.pins.forEach((pin) => {
            this.props.getLocationDetails(pin.obj.placeId)
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.locationList);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>List View</Text>

                </View>
                <ScrollView>
                    {
                        this.props.locationList.map((location, i) => (
                            <View key={`lvi${i}`} style={{ height: 110 }}>
                                <ListViewItem location={location} mongoData={mongoFilter(this.props.pins, location.place_id)}/>

                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    pins: state.map.generatedLocationData,
    locationList: state.map.locationList,
})

const mapDispatchToProps = {
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationListView)
