import React, { PropTypes, } from 'react';
import { View, Text, } from 'react-native';
import { styles, } from './styles.js'
import SearchBar from '../../containers/SearchBar';
import Card from '../Card'
import LocationListView from '../LocationListView'

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
            <LocationListView />

        );
    }
}

export default AboutContainer