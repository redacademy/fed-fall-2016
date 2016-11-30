import React, { PropTypes, } from 'react';
import { View, Text, } from 'react-native';
import { styles, } from './styles.js'
import SearchBar from '../../containers/SearchBar';
import Card from '../Card'

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
            <Card height={500}>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
                <Text>Im inside the card</Text>
            </Card>
        );
    }
}

export default AboutContainer