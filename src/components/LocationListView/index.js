import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Text
} from 'react-native'
import styles from './styles'
import ListViewItem from '../ListViewItem'
import UnsavedListViewItem from '../ListViewItem/unsavedList'
import { getLocationDetails } from '../../redux/actions'
import { connect } from 'react-redux'
import { mongoFilter } from '../../config/functions'

class LocationListView extends Component {
    constructor() {
        super()
        this.state = {
            size: 0,
        }
    }

    componentWillMount() {
        this.props.pins.forEach((pin) => {
            this.props.getLocationDetails(pin.obj.placeId)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>{this.props.locationSuggestions ? 'Select your Location' : 'List View'}</Text>
                </View>
                <ScrollView>
                    <View onLayout={(event) => {
                        this.setState({ size: event.nativeEvent.layout.width })
                    }
                    }
                        />
                    {
                        this.props.locationList.map((location, i) => (
                            <View key={`lvi${i}`} style={{ height: 110 }}>
                                {this.props.locationSuggestions ?
                                    <UnsavedListViewItem location={location} />
                                    :
                                    <ListViewItem location={location} mongoData={mongoFilter(this.props.pins, location.place_id)} placeid={location.place_id} size={this.state.size} />
                                }
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
})

const mapDispatchToProps = {
    getLocationDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationListView)
