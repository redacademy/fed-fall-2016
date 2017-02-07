import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {
} from '../../redux/actions'
import { connect } from 'react-redux'
import styles from './styles'


class UserView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.stretch}
                    source={require('../../assets/userplaceholder.png')}
                    />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView)