import React, { PropTypes, } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js'
import SearchBar from '../../containers/SearchBar';

class AboutContainer extends React.Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };
    static route = {
        navigationBar: {
            title: 'About',
        }
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.header}>Changed and Fed</Text>
            <Text style={styles.subheader}>Contributors:</Text>
            <Text style={styles.font}>Scott Clayton</Text>
            <Text style={styles.font}>Brandon Fajardo</Text>
            <Text style={styles.font}>Mackenzie Kieran</Text>
            <Text style={styles.font}>Fergus MacConnell</Text>
            <Text style={styles.font}>Shawn McKay</Text>
            <Text style={styles.font}>Tracey Sum</Text>
            <SearchBar />
            <Text style={styles.font}>{this.props.person}</Text>

        </View>
        );
    }
}

export default AboutContainer;