import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {
} from '../../redux/actions'
import { connect } from 'react-redux'
import styles from './styles'


class UserView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Planned for a future release:</Text>
                <Text>- Save your Favourite Locations</Text>
                <Text>- Last 25 viewed locations</Text>
                <Text>- View locations you have rated</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView)