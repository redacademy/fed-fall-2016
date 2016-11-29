import React, { Component, PropTypes } from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import {
    View,
    Image,
} from 'react-native'
import { styles } from './styles'


class LocationHomeOptionsBar extends Component {

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

    iconRenderer(isSelected, iconName) {
        const color = isSelected ? 'black' : color.white
        return <Icon name={iconName} size={24} color={color} />
    }

    render() {
        return (
            <View style={styles.container}>
                <View renderIcon={(isSelected) => this.iconRenderer(isSelected, 'globe')} />
                <View renderIcon={(isSelected) => this.iconRenderer(isSelected, 'plus')} />
                <View renderIcon={(isSelected) => this.iconRenderer(isSelected, 'person')} />
            </View>
        );
    }
}

export default LocationHomeOptionsBar;