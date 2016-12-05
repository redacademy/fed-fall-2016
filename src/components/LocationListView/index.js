import React, { Component } from 'react'
import {
    View,
    ListView,
    Text,
} from 'react-native'
import { styles } from './styles'
import ListViewItem from '../ListViewItem'
import { mockLocations } from '../../assets/mockData.js'
import Loader from '../Loader'


class LocationListView extends Component {

    constructor(props) {
        super(props);
        //this.ds for the list view
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: this.ds,
            // isLoading: true,

        }
    }
    componentWillMount() {
        this.setState({
            dataSource: this.ds.cloneWithRows(mockLocations),
        });
    }
    // componentDidUpdate() {
    //     if (this.state.dataSource && this.state.isLoading) {
    //         this.setState({ isLoading: false })
    //     }
    // }


    render() {
        // console.log(this.state.dataSource)
        // if (this.state.isLoading) {
        //     return (
        //         <Loader />
        //     )
        // } else {
            return (

                <View>
                    <View style={styles.title}>
                        <Text>List View</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                        renderRow={(data) => {
                            return (

                                <ListViewItem placeId={data} />

                            )
                        } }
                        />
                </View>
            )
        }
    }

export default LocationListView
