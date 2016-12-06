import React, { PropTypes } from 'react'
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
        },
    }
    render() {
        return (
            <Card />
        )
    }
}

export default AboutContainer