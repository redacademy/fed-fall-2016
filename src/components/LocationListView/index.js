import React, { Component } from 'react'
import {
    View,
    ListView,
} from 'react-native'
import { styles } from './styles'
import ListViewItem from '../ListViewItem'
import { mockLocations } from '../../assets/mockData.js'


class LocationListView extends Component {

    componentWillMount() {
        this.setState({
            dataSource: this.ds.cloneWithRows(mockLocations),
        });
    }
    constructor(props) {
        super(props);
        //this.ds for the list view
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: this.ds,
        }
    }


    render() {
        console.log(this.state.dataSource)
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                renderRow={(data) => {
                    return (
                        <ListViewItem locations={data}/>
                    )
                } }
                />
        )
    }
}

export default LocationListView
